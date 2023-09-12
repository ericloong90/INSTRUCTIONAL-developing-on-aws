# Updates environment variables for the lambda function
aws lambda update-function-configuration \
		--function-name test-function \
		--environment '{"Variables":{"secret_key":"super_secret_key"}}'