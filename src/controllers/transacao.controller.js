import dayjs from "dayjs";
import { db } from "../database/database.connection.js";

//res.locals.usuario equals to usuario from db collection("usuarios")

export async function adicionarTransacao(req, res) {
  const { titulo, valor, tipo } = req.body;
  const data = dayjs().format("DD/MM");
  const usuario = res.locals.usuario;

  const transacao = {
    titulo,
    valor,
    tipo,
    data,
    idUsuario: usuario._id,
  };

  try {
    await db.collection("transacoes").insertOne(transacao);
    res.sendStatus(201);
    return;
  } catch (erro) {
    res.status(500).send(erro.message);
    return;
  }
}

export async function historicoTransacao(req, res) {
  const usuario = res.locals.usuario;

  try {
    const historico = await db
      .collection("transacoes")
      .find({ idUsuario: usuario._id })
      .toArray();
    res.status(200).send(historico.reverse());
    return;
  } catch (erro) {
    res.status(500).send(erro.message);
    return;
  }
}
