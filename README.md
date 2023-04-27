# serverless-framework-aws-users
App Serverless AWS - Users



### Branch hello-world
### crear proyecto con plantilla ejemplo, pero serverless framework ya trae plantilla por proveedor de nube
Prerrequisito:
 * npm
 * nodejs
 * aws cli
 * aws configure (opcional)
*----* serverless hello-world
sls create --path hola-mundo --template-url https://github.com/platzi/serverless-framework/tree/main/hola-mundo

run - deploy AWS: serverless deploy
actualizar function AWS: serverless deploy (cloudformation tiene el estado del ultimo deploy)
eliminar function AWS: serverless remove
run - local: serverless invoke local --function hello-world
run - Serverless Offline (para simular el deploy AWS), install: npm install serverless-offline --save-dev
 - serverless offline start

### Branch serverless-users
prerrequisitos
 * npm
 * nodejs
 * aws cli
 * aws configure (opcional)
 * npm install serverless-offline --save-dev
 * npm install --save serverless-dynamodb-local (ref: https://www.serverless.com/plugins/serverless-dynamodb-local)
 * npm install aws-sdk --save-dev
 * serverless dynamodb install

run local: serverless offline start

Errores: 
* Sale error desde windows si ejecutamos 'sls deploy' ejecutar 'serverless deploy'
* Error: Error getting DynamoDb local latest tar.gz location undefined: 403 cuando ejecutamos 'serverless dynamodb install', Solución: 
In the meantime, manually editing the download_url in node_modules/dynamodb-localhost/dynamodb/config.json to https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz and the import of http to https in node_modules/dynamodb-localhost/dynamodb/installer.js should do the trick!


