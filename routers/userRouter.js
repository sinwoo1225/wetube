import express from "express";
import routes from "../routes";
import { users, editProfile, changePassword, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetatil, userDetail);

export default userRouter;