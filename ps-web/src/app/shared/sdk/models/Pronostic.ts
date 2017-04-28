/* tslint:disable */
import {
  Promosport,
  PronosticMatch
} from '../index';

declare var Object: any;
export interface PronosticInterface {
  "saveDate": Date;
  "id"?: number;
  "promosportId"?: number;
  promosport?: Promosport;
  pronosticMatches?: PronosticMatch[];
}

export class Pronostic implements PronosticInterface {
  "saveDate": Date;
  "id": number;
  "promosportId": number;
  promosport: Promosport;
  pronosticMatches: PronosticMatch[];
  constructor(data?: PronosticInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pronostic`.
   */
  public static getModelName() {
    return "Pronostic";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pronostic for dynamic purposes.
  **/
  public static factory(data: PronosticInterface): Pronostic{
    return new Pronostic(data);
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
      name: 'Pronostic',
      plural: 'Pronostics',
      properties: {
        "saveDate": {
          name: 'saveDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "promosportId": {
          name: 'promosportId',
          type: 'number'
        },
      },
      relations: {
        promosport: {
          name: 'promosport',
          type: 'Promosport',
          model: 'Promosport'
        },
        pronosticMatches: {
          name: 'pronosticMatches',
          type: 'PronosticMatch[]',
          model: 'PronosticMatch'
        },
      }
    }
  }
}
