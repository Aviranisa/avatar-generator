import Router from "express";
import { generateAvatar } from "../services/userAvatarService.js";
import path from "path";

const userAvatarRouter = Router();
const __dirname = path.resolve();

userAvatarRouter.route("/").get(async (req, res) => {
	try {
		const avatar = await generateAvatar(req.query);
		if (!avatar) {
			throw new Error("something went wrong.");
		}
		res
			.status(200)
			.sendFile(`${__dirname}/services/avatars/${req.query.name}.jpg`);
	} catch (err) {
		res.status(400).send(err.message);
	}
});

export default userAvatarRouter;
