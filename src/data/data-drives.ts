import { F1 } from "./data-source";
import { cheackYear, roundCheack, paginationOptions } from '../lib/utils';

export class DriversData extends F1 {
  constructor() {
    super();
  }
  async getDrivers(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return await this.get("drivers.json?limit=1000", {
        cacheOptions: { ttl: 60 }
      });
    }
    return await this.get(`drivers.json?${paginationOptions(pageElements,page)}`, {
      cacheOptions: { ttl: 60 }
    });
  }
  async getDriversYear(year: string ) {
    year = cheackYear(year);
    return await this.get(`${year}/drivers.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
  async getDriversYearAndRound(year: string, round: number) {
    year = cheackYear(year);
    round = roundCheack(round);
    return await this.get(`${year}/${round}/drivers.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
  async getDriversID(id: string) {
    return await this.get(`drivers/${id}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }

  

}
