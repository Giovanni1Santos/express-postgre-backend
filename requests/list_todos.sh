#!/bin/bash

TOKEN="SEU_TOKEN_AQUI"

curl -X GET http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN"
