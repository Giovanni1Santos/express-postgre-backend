#!/bin/bash

TOKEN="3a52bbec4f81776e630233043397252558f864582d60abea36efdce871a259a9"

curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar Sequelize",
    "description": "Praticar relacionamento entre modelos"
  }'
