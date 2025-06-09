# Backend API Documentation

## Endpoint: `/users/register`

### Description

Registers a new user in the system.  
This endpoint expects user details in the request body and returns a JWT token and the created user object upon successful registration.

---

### Method

`POST`

---

### Request Body

Send as `application/json`:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): User's first name (min 3, max 50 characters)
- `fullname.lastname` (string, required): User's last name (min 3, max 50 characters)
- `email` (string, required): Valid email address, unique
- `password` (string, required): Minimum 6 characters

---

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name is required",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Missing Fields

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": "All fields are required"
  }
  ```

---

### Example cURL

```sh
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

---

## Notes

- Passwords are hashed before storage.
- Email must be unique.
- Returns a JWT token for authentication in subsequent requests.
