# Get item from DynamoDB table
aws dynamodb get-item \
    --table-name test-table \
    --key '{"id":{"S":"nUoxyrleMOKoKfk2FS7zI"}}' \
    --endpoint-url http://localhost:8000