import joi from "joi";

const MINIMUM_LENGTH = 3;

export const cadastroSchema = joi.object({
  nome: joi.string().required().min(MINIMUM_LENGTH),
  email: joi.string().email().required(),
  senha: joi.string().required().min(MINIMUM_LENGTH),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().required(),
});
