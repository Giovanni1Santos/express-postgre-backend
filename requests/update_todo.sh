
#!/bin/bash

TOKEN="SEU_TOKEN_AQUI"
ID=1

curl -X PUT http://localhost:3000/api/todos/$ID \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "done": 1
  }'
