import express from "express";
import { getAllUsers } from "../controllers/user.js";
import { AddNewUser } from "../controllers/user.js";
import { getUserDetails } from "../controllers/user.js";
import { updateUser } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", AddNewUser);

router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)


export default router;