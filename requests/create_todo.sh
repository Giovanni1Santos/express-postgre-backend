#!/bin/bash

TOKEN="SEU_TOKEN_AQUI"

curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar Sequelize",
    "description": "Praticar relacionamento entre modelos"
  }'
