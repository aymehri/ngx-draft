import { Promosport } from './promosport';
import { PronosticMatch } from './pronostic-match';
import { User } from './user';

export interface Pronostic {
    promosport: Promosport;
    user: User;
    pronosticsMatchs: Array<PronosticMatch>;
    saveDate: Date;
}
