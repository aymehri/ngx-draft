/* tslint:disable */
import {
  Match
} from '../index';

declare var Object: any;
export interface PromosportInterface {
  "seasonYear"?: number;
  "number"?: number;
  "date"?: Date;
  "finishDate"?: Date;
  "online"?: boolean;
  "id"?: number;
  matches?: Match[];
}

export class Promosport implements PromosportInterface {
  "seasonYear": number;
  "number": number;
  "date": Date;
  "finishDate": Date;
  "online": boolean;
  "id": number;
  matches: Match[];
  constructor(data?: PromosportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Promosport`.
   */
  public static getModelName() {
    return "Promosport";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Promosport for dynamic purposes.
  **/
  public static factory(data: PromosportInterface): Promosport{
    return new Promosport(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Promosport',
      plural: 'Promosports',
      properties: {
        "seasonYear": {
          name: 'seasonYear',
          type: 'number'
        },
        "number": {
          name: 'number',
          type: 'number'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "finishDate": {
          name: 'finishDate',
          type: 'Date'
        },
        "online": {
          name: 'online',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        matches: {
          name: 'matches',
          type: 'Match[]',
          model: 'Match'
        },
      }
    }
  }
}
