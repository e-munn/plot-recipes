// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RECIPES } = initSchema(schema);

export {
  RECIPES
};