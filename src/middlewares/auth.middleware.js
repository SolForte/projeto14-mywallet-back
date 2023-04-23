import { db } from "../database/database.connection.js";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const sessao = await db.collection("sessoes").findOne({ token });
    if (!sessao) {
      res.status(401).send("Token expirado");
      return;
    }
    const usuario = await db
      .collection("usuarios")
      .findOne({ _id: sessao.idUsuario });
    if (!usuario) {
      res.status(401).send("ID de usuário não existe no banco de dados");
      return;
    }
    res.locals.sessao = sessao;
    next();
  } catch (erro) {
    res.status(500).send(erro.message);
    return;
  }
}
