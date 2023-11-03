# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "farhan",
  "password": "rahasia",
  "name": "farhan dari"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "farhan",
    "name": "farhan dari"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "farhan",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "farhan dari lagi", //optional
  "password": "rahasia lagi" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "farhan",
    "name": "farhan dari lagi"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "farhan",
    "name": "farhan dari lagi"
  }
}
```

Response Body Error :

```json
{
  "errors": "unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "logout OK"
}
```

Response Body Error :

```json
{
  "errors": "unauthorized"
}
```
