# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Hearders :

- Authorization : token

Request Body :

```json
{
  "firs_name": "Devi",
  "last_name": "Holilah",
  "email": "dev@gmail.com",
  "phone": "08287878"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firs_name": "Devi",
    "last_name": "Holilah",
    "email": "dev@gmail.com",
    "phone": "08287878"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Email tidak valid"
}
```

## Update Contact API

Endpoint : PUT /api/contacts:id

Hearders :

- Authorization : token

Request Body :

```json
{
  "firs_name": "Devi",
  "last_name": "Holilah",
  "email": "dev@gmail.com",
  "phone": "08287878"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firs_name": "Devi",
    "last_name": "Holilah",
    "email": "dev@gmail.com",
    "phone": "08287878"
  }
}
```

Response Body Errors :

```json
{
  "errors": "Email tidak valid"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Hearders :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firs_name": "Devi",
    "last_name": "Holilah",
    "email": "dev@gmail.com",
    "phone": "08287878"
  }
}
```

Response Body Errors :

```json
{
  "errors": "contact tidak ada"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Hearders :

- Authorization : token

Query params :

- name : search by first_name or last_name, using like, optional
- email : serach by email using like, optional
- phone : search by phone using like, optional
- page : number of page, default 1
- size : jumlah per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "firs_name": "Devi",
      "last_name": "Holilah",
      "email": "dev@gmail.com",
      "phone": "08287878"
    },
    {
      "id": 2,
      "firs_name": "Devi",
      "last_name": "Holilah",
      "email": "dev@gmail.com",
      "phone": "08287878"
    },
    {
      "id": 3,
      "firs_name": "Devi",
      "last_name": "Holilah",
      "email": "dev@gmail.com",
      "phone": "08287878"
    }
  ],
  "pagging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Errors :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Hearders :

- Authorization : token

Response Body Success :

```json
{
  "data": "berhasil mengahpus contact"
}
```

Response Body Errors :

```json
{
  "errors": "Contact tidak ada"
}
```
