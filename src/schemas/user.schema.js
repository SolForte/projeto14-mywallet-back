import joi from "joi";

const MINIMUM_LENGTH = 3;

export const userSchema = joi
  .object({
    nome: joi.string().required().min(MINIMUM_LENGTH),
    email: joi.string().email().required(),
    senha: joi.string().required().min(MINIMUM_LENGTH),
    confirmar_senha: joi.ref("senha"),
  })
  .with("senha", "confirmar_senha");
