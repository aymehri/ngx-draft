/* tslint:disable */
import { Injectable } from '@angular/core';
import { Team } from '../../models/Team';
import { Match } from '../../models/Match';
import { Promosport } from '../../models/Promosport';
import { Pronostic } from '../../models/Pronostic';
import { PronosticMatch } from '../../models/PronosticMatch';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Team: Team,
    Match: Match,
    Promosport: Promosport,
    Pronostic: Pronostic,
    PronosticMatch: PronosticMatch,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
