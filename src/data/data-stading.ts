
import { F1 } from './data-source';
import { cheackYear, roundCheack } from '../lib/utils';

export class StadingsData extends F1 {
    constructor(){
        super();
    }
    async getSeasonPilotsRanking(year: string) {
        year = cheackYear(year);
        return await this.get(String(year).concat('/driverStandings.json'), {
          cacheOptions: { ttl: 60 }
        });
      }


    // StandingsTable
}
