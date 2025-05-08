#!/bin/bash

TOKEN="SEU_TOKEN_AQUI"
ID=1

curl -X DELETE http://localhost:3000/api/todos/$ID \
  -H "Authorization: Bearer $TOKEN"
