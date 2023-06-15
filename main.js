import e from "express";
import userAvatarRouter from "./routers/userAvatarRouter.js";
import bodyParser from "body-parser";

const app = e();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.use("/user-avatar", userAvatarRouter);

app.use(function (req, res, next) {
	res.status(404).send("Wrong endpoint");
});

app.listen(2000, () => console.log(`server is runing on port ${2000}`));
