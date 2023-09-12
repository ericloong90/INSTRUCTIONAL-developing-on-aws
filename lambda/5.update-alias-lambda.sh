# Updates alias for lambda function
aws lambda update-alias \
		--function-name test-function \
		--name PROD \
		--function-version 2