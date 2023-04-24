Documentação grosseira:

//Post "/sign-up";
Espera um BODY no formato:
{
nome,
email,
senha,
},
e então adiciona um objeto no formato:
{
\_id,
nome,
email,
senha,
},
na collection "usuarios".

//Post "/sign-in";
Espera um BODY no formato:
{
email,
senha,
},
adiciona um objeto no formato:
{
\_id,
token,
idUsuario,
},
na collection "sessoes", onde "idUsuario" equivale ao "\_id" de algum objeto na collection "usuarios",
e então retorna um objeto no formato
{
token,
idUsuario,
nome,
}, como resposta.

//Post "/nova-transacao";
Espera um HEADERS com titulo "authorization" no formato:
{
"Bearer ${token}"
}
(
ATENÇÃO:
"token" neste objeto deve ter equivalência a algum "token" existente na collection "sessoes"
),
espera um BODY no formato:
{
titulo,
valor,
tipo,
},
e adiciona um objeto no formato:
{
\_id,
titulo,
valor,
tipo,
data,
idUsuario,
},
na collection "transacoes", onde "idUsuario" equivale ao "id" de algum objeto na collection "usuarios".

//Get "/historico-transacao";
Espera um HEADERS com titulo "authorization" no formato:
{
"Bearer ${token}"
}
(
ATENÇÃO: "token" neste objeto deve ter equivalência a algum "token" existente na collection "sessoes"
),
e retorna um ARRAY de objetos no formato:
{
\_id,
titulo,
valor,
tipo,
data,
idUsuario,
}.
