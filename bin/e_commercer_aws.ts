#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { ECommerceApiStack } from '../lib/ecommerceApi-stack';
import { ProductsAppStack } from '../lib/productsApp-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: '415717025308',
  region: 'sa-east-1',
};

const tags = {
  cost: 'Ecommerce',
  team: 'gn',
};

const productsAppStack = new ProductsAppStack(app, 'ProductsApp', {
  tags,
  env,
});

const eCommercerApiStack = new ECommerceApiStack(app, 'ECommerceApi', {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  tags,
  env,
});

eCommercerApiStack.addDependency(productsAppStack);
