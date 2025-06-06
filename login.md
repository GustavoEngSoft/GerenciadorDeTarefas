# Funcionalidade – Login

## Objetivo
Permitir que usuários autenticados acessem recursos privados da aplicação.

## Fluxo Básico
1. **Usuário** acessa `/login`.
2. Preenche **e-mail** e **senha**.
3. Sistema valida credenciais.
4. Se correto, redireciona para **/dashboard** e cria **JWT** no cookie.

## Cenário de Erro
* Credenciais inválidas ⇒ exibir mensagem “E-mail ou senha incorretos”.

## Requisitos Técnicos
- Endpoint **POST /api/auth/login**.
- Retorno `200 OK` com corpo `{ token: <jwt> }`.
- Senhas armazenadas com **bcrypt**.


## Se o usuário informar o e-mail e senha corretos, o sistema deverá **conceder** o acesso.



---

> _Versão 1.0 – 6 jun 2025_
