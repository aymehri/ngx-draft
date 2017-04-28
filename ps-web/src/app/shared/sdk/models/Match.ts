/* tslint:disable */
import {
  Team,
  Promosport
} from '../index';

declare var Object: any;
export interface MatchInterface {
  "x1"?: boolean;
  "xx"?: boolean;
  "x2"?: boolean;
  "id"?: number;
  "localTeamId"?: number;
  "visitorTeamId"?: number;
  "promosportId"?: number;
  localTeam?: Team;
  visitorTeam?: Team;
  promosport?: Promosport;
}

export class Match implements MatchInterface {
  "x1": boolean;
  "xx": boolean;
  "x2": boolean;
  "id": number;
  "localTeamId": number;
  "visitorTeamId": number;
  "promosportId": number;
  localTeam: Team;
  visitorTeam: Team;
  promosport: Promosport;
  constructor(data?: MatchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Match`.
   */
  public static getModelName() {
    return "Match";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Match for dynamic purposes.
  **/
  public static factory(data: MatchInterface): Match{
    return new Match(data);
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
      name: 'Match',
      plural: 'Matches',
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
        "localTeamId": {
          name: 'localTeamId',
          type: 'number'
        },
        "visitorTeamId": {
          name: 'visitorTeamId',
          type: 'number'
        },
        "promosportId": {
          name: 'promosportId',
          type: 'number'
        },
      },
      relations: {
        localTeam: {
          name: 'localTeam',
          type: 'Team',
          model: 'Team'
        },
        visitorTeam: {
          name: 'visitorTeam',
          type: 'Team',
          model: 'Team'
        },
        promosport: {
          name: 'promosport',
          type: 'Promosport',
          model: 'Promosport'
        },
      }
    }
  }
}
