import joi from "joi";

export const transacaoSchema = joi.object({
  titulo: joi.string().required(),
  valor: joi.number().positive().required(),
  tipo: joi.string().valid("entrada", "saida").required(),
});
