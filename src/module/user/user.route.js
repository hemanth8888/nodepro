import Router from "express";
import * as userController from "./user.controller";

const route = new Router();

route.post("/signup", userController.signUp);
route.get("/userlist", userController.userList);
route.get("/user-details/:userName", userController.singleList)

export default route;