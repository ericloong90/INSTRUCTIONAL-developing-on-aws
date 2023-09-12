# Zips the nodejs folder into a layer.zip file and publishes it as a new layer version.
zip -r layer.zip nodejs/ && \
aws lambda publish-layer-version --layer-name test-layer --zip-file fileb://layer.zip