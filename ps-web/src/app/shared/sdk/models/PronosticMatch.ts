/* tslint:disable */
import {
  Pronostic,
  Match
} from '../index';

declare var Object: any;
export interface PronosticMatchInterface {
  "x1"?: boolean;
  "xx"?: boolean;
  "x2"?: boolean;
  "id"?: number;
  "pronosticId"?: number;
  "matchId"?: number;
  pronostic?: Pronostic;
  match?: Match;
}

export class PronosticMatch implements PronosticMatchInterface {
  "x1": boolean;
  "xx": boolean;
  "x2": boolean;
  "id": number;
  "pronosticId": number;
  "matchId": number;
  pronostic: Pronostic;
  match: Match;
  constructor(data?: PronosticMatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PronosticMatch`.
   */
  public static getModelName() {
    return "PronosticMatch";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PronosticMatch for dynamic purposes.
  **/
  public static factory(data: PronosticMatchInterface): PronosticMatch{
    return new PronosticMatch(data);
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
      name: 'PronosticMatch',
      plural: 'PronosticMatches',
      properties: {
        "x1": {
          name: 'x1',
          type: 'boolean',
          default: false
        },
        "xx": {
          name: 'xx',
          type: 'boolean',
          default: false
        },
        "x2": {
          name: 'x2',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "pronosticId": {
          name: 'pronosticId',
          type: 'number'
        },
        "matchId": {
          name: 'matchId',
          type: 'number'
        },
      },
      relations: {
        pronostic: {
          name: 'pronostic',
          type: 'Pronostic',
          model: 'Pronostic'
        },
        match: {
          name: 'match',
          type: 'Match',
          model: 'Match'
        },
      }
    }
  }
}
