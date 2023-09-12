# Create table in DynamoDB
aws dynamodb create-table \
		--table-name test-classlist-table \
		--attribute-definitions \
				AttributeName=id,AttributeType=S \
				AttributeName=studentName,AttributeType=S \
		--key-schema \
				AttributeName=id,KeyType=HASH \
				AttributeName=studentName,KeyType=RANGE \
		--provisioned-throughput \
				ReadCapacityUnits=5,WriteCapacityUnits=5 \
		--endpoint-url http://localhost:8000