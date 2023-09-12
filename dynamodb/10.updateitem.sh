# Update item on DynamoDB table
aws dynamodb update-item \
    --table-name test-table \
    --key '{"id":{"S":"nUoxyrleMOKoKfk2FS7zI"}}' \
    --update-expression "SET #name = :name" \
    --expression-attribute-names '{"#name": "name"}' \
    --expression-attribute-values '{":name": {"S": "John Doe"}}' \
    --return-values ALL_NEW \
    --endpoint http://localhost:8000