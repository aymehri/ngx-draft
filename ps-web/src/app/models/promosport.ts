import { Match } from './match';

export interface Promosport {
    saison: string;
    number: number;
    matchs: Array<Match>;
    date: Date;
    finishDate: Date;
}
