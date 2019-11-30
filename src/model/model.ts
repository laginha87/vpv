import { JSONApiResource } from './json_api'

export interface ModelClass extends Function {
   new(data: JSONApiResource): Model;
   modelName: string;
}

export class Model {
   public static modelName: string;
   id: string;

   constructor (data: JSONApiResource) {
     this.id = data.id
     Object.keys(data.attributes).forEach((key) => {
       this[key] = data.attributes[key]
     })
   }
}
