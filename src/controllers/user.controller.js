import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

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

export async function signin(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await db.collection("usuarios").findOne({ email });
    if (!usuario) {
      res.status(409).send("Usuário não existe");
      return;
    }

    const senhaCompareSync = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaCompareSync) {
      res.status(401).send("Senha incorreta");
    }

    if (usuario && senhaCompareSync) {
      const token = uuid();
      await db
        .collection("sessoes")
        .insertOne({ token, idUsuario: usuario._id });
      res.status(200).send({ token, idUsuario: usuario._id });
    }
  } catch (erro) {
    res.status(500).send(erro.message);
    return;
  }
}
