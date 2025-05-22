#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0Nzc5MjQ3MSwiZXhwIjoxNzQ3Nzk2MDcxfQ.lo9Scc_PKEX0UhmFx8eFPWPT4wCfLELYyKIN7OOqyKc"
ID=1

curl -X DELETE http://localhost:3000/api/todos/$ID \
  -H "Authorization: Bearer $TOKEN"
