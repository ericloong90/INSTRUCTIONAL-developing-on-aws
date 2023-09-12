# Associate layer to function
aws lambda update-function-configuration \
		--function-name test-function \
		--layers arn:aws:lambda:ap-southeast-1:844010254361:layer:test-layer:2