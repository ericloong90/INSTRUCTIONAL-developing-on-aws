aws lambda add-permission \
	--function-name "arn:aws:lambda:ap-southeast-1:844010254361:function:test-function:prod" \
	--source-arn "arn:aws:execute-api:ap-southeast-1:844010254361:eyr9xxz073/*/GET/" \
	--principal apigateway.amazonaws.com \
	--statement-id ae3f577b-148b-4bc8-a76a-47ab4b2b3a64 \
	--action lambda:InvokeFunction
