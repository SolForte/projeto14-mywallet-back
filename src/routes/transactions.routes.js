import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import {
  adicionarTransacao,
  historicoTransacao,
} from "../controllers/transacao.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { transacaoSchema } from "../schemas/transacao.schema.js";

const router = Router();

router.use(authValidation);

router.post(
  "/nova-transacao",
  validateSchema(transacaoSchema),
  adicionarTransacao
);
router.get("/historico-transacao", historicoTransacao);

export default router;
