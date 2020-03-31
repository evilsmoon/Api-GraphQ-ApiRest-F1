import { F1 } from "./data-source";
import { cheackYear, roundCheack } from "../lib/utils";

export class RacesData extends F1 {
  constructor() {
    super();
  }
  async getYear(year: string) {
    year = cheackYear(year);
    return await this.get(`${year}.json`, { cacheOptions: { ttl: 60 } });
  }
  async getYearRound(year: string, round: number) {
    year = cheackYear(year);
    round = roundCheack(round);
    return await this.get(`${year}/${round}.json`, {
      cacheOptions: { ttl: 60 }
    });
  }
}
