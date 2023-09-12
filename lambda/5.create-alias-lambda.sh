# Creates alias for lambda function
aws lambda create-alias \
		--function-name test-function \
		--name NEW_ALIAS \
		--function-version 2