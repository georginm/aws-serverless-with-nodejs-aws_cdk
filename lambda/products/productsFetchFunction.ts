import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
  // eslint-disable-next-line import/no-unresolved
} from 'aws-lambda';

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const method = event.httpMethod;

  const lambdaRequestId = context.awsRequestId;
  const apiRequestId = event.requestContext.requestId;

  console.log(
    `API Gateway RequestId: ${apiRequestId} - Lambda RequestId: ${lambdaRequestId}`
  );

  if (event.resource === '/products') {
    if (method === 'GET') {
      console.log('GET');

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'GET Products - OK',
        }),
      };
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Bad Request',
    }),
  };
}

export { handler };
