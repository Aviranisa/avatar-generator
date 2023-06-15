import { createAvatar } from "@beyonk/initials-avatar";
import { createWriteStream } from "fs";
import path from "path";
const __dirname = path.resolve();

export const generateAvatar = async ({ name, backgroundColor }) => {
	try {
		const splitedUserName = name.includes(" ") ? name.split(" ") : name;
		const output = createWriteStream(
			`${__dirname}/services/avatars/${name}.jpg`
		);
		await createAvatar(
			{
				firstName: splitedUserName[0] || splitedUserName,
				lastName: splitedUserName[1] || "",
			},
			output,
			{
				size: 100,
				background: `#${backgroundColor}` || "#000",
				round: true,
			}
		);
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
