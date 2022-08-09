import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodeJS from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

class ProductsAppStack extends cdk.Stack {
  readonly productsFetchHandler: lambdaNodeJS.NodejsFunction;

  // scope: todo projeto cdk
  // id: nome da stack
  // props: propriedades
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    this.productsFetchHandler = new lambdaNodeJS.NodejsFunction(
      this,
      'ProductsFetchFunction',
      {
        functionName: 'ProductsFetchFunction',
        entry: 'lambda/products/productsFetchFunction.ts',
        handler: 'handler',
        memorySize: 128,
        timeout: cdk.Duration.seconds(5),
        bundling: {
          minify: true,
          sourceMap: false,
        },
      }
    );
  }
}

export { ProductsAppStack };
