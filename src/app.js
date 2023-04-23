import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/*
Front end routes:

Route: / = signinpage
Route: /cadastro = signuppage
Route: /home = homepage 
Route: /nova-transacao/:tipo = transactionpage

Front end database interactions:

Sign-up (cadastro)
Sign-in (login)
Transação (depositar, remover)
Listagem (historico de transação)
Logout

*/

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
