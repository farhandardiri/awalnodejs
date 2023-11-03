# Address API Spec

## Create Address API

Endpoint : POST /api/contact/:contact_id/addresses

Header :

- Authorization : token

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "province": "provinsi apa",
  "country": "negara apa",
  "postal_code": "code post"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "code post"
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Update Address API

Endpoint : PUT /api/contact/:contact_id/addresses/:addresses_id

Header :

- Authorization : token

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "province": "provinsi apa",
  "country": "negara apa",
  "postal_code": "code post"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "code post"
  }
}
```

Response Body Error :

```json
{
  "errors": "country is required"
}
```

## Get Address API

Endpoint : GET /api/contact/:contact_id/addresses/addresses_id

Header :

- Authorization : token

Request Body :

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "code post"
  }
}
```

Response Body Error :

```json
{
  "errors": "contact is not found"
}
```

## List Address API

Endpoint : GET /api/contact/:contact_id/addresses

Header :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan apa",
      "city": "kota apa",
      "province": "provinsi apa",
      "country": "negara apa",
      "postal_code": "code post"
    },
    {
      "id": 2,
      "street": "jalan apa",
      "city": "kota apa",
      "province": "provinsi apa",
      "country": "negara apa",
      "postal_code": "code post"
    },
    {
      "id": 3,
      "street": "jalan apa",
      "city": "kota apa",
      "province": "provinsi apa",
      "country": "negara apa",
      "postal_code": "code post"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contact/:contact_id/addresses/:addresses_id

Header :

- Authorization : token

Response Body Success :

```json
{
  "data": "tehapus"
}
```

Response Body Error :

```json
{
  "errors": "addresses is not found"
}
```
