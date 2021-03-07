import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RECIPES {
  readonly id: string;
  readonly recipe?: string;
  constructor(init: ModelInit<RECIPES>);
  static copyOf(source: RECIPES, mutator: (draft: MutableModel<RECIPES>) => MutableModel<RECIPES> | void): RECIPES;
}