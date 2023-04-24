## Requisições

| post | /sign-up |
| ---- | -------- |

Espera um [body] no formato:

> {nome, email, senha}

Insere na collection [usuarios]:

> {nome, email, senha}

| post | /sign-in |
| ---- | -------- |

Espera um [body] no formato:

> {nome, senha}

Insere na collection [sessoes]:

> {token, idUsuario}

Retorna como resposta:

> {token, nome}

| get | /historico-transacao |
| --- | -------------------- |

Espera um [headers] no formato:

> {Authorization: Bearer token}

Retorna como resposta um array de objetos no formato:

> {titulo, valor, tipo, data}

| post | /nova-transacao |
| ---- | --------------- |

Espera um [headers] no formato:

> {Authorization: Bearer token}

Espera um [body] no formato:

> {titulo, valor, tipo}

Insere na collection [transacoes]:

> {titulo, valor,tipo, data, idUsuario}
