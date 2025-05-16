#!/bin/bash

TOKEN="2b64e22aa0785219e1c28ac128e758cd44af9d451271a88f0a6ea4d44af0441f"

curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar Sequelize",
    "description": "Praticar relacionamento entre modelos"
  }'
