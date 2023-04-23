import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { cadastroSchema, loginSchema } from "../schemas/user.schema.js";
import { signup } from "../controllers/user.controller.js";
import { signin } from "../controllers/user.controller.js";

const router = Router();

router.post("/sign-up", validateSchema(cadastroSchema), signup);
router.post("/sign-in", validateSchema(loginSchema), signin);

export default router;
