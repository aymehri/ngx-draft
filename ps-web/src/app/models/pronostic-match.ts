import { Pronostic } from './pronostic';
import { Match } from './../create/models/match';

export interface PronosticMatch {
    pronostic: Pronostic;
    match: Match;
    x1: boolean;
    xx: boolean;
    x2: boolean;
}
