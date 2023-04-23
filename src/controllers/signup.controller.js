import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";

const ROUND_NUMBER = 6;

export async function signup(req, res) {
  const { nome, email, senha } = req.body;

  try {
    const usuario = await db.collection("usuarios").findOne({ email });
    if (usuario) {
      res.status(409).send("E-mail já cadastrado");
      return;
    }
    const hash = bcrypt.hashSync(senha, ROUND_NUMBER);
    await db.collection("usuarios").insertOne({ nome, email, senha: hash });
    res.sendStatus(201);
    return;
  } catch (erro) {
    res.status(500).send(erro.message);
    return;
  }
}
