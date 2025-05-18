#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0NzU5OTUxMywiZXhwIjoxNzQ3NjAzMTEzfQ.YlJ4jLvHsK81rAx_MrxuTMjMjp-_yqtPn1sN4piQvK0"

curl -X POST http://localhost:3000/api/todos \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar Sequelize",
    "description": "Praticar relacionamento entre modelos"
  }'
