import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userSchema } from "../schemas/user.schema.js";
import { signup } from "../controllers/signup.controller.js";

const router = Router();

router.post("/sign-up", validateSchema(userSchema), signup);

export default router;
