#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0Nzc5MjEwMSwiZXhwIjoxNzQ3Nzk1NzAxfQ.N15ja_AebVi12QnN2sZIQFLLZftizJ9H1ioNcojAN2I"

curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar Sequelize",
    "description": "Praticar relacionamento entre modelos"
  }'
