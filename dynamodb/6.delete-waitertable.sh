# Delete demo-waiting-table table
aws dynamodb delete-table \
		--table-name demo-waiting-table \
		--endpoint-url http://localhost:8000
