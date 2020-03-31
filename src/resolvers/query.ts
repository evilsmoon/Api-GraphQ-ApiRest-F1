import { IResolvers } from "graphql-tools";
// import { LIST } from "./resolversMap";
import { dataSources } from "../data/index";
import { DriversData } from "../data/data-drives";
import { CircuitsData } from '../data/data-circuits';

const query: IResolvers = {
  Query: {
    async SeasonsList(_: void, __: any, { dataSources }) {
      return await dataSources.seasons
        .getSeasons()
        .then((data: any) => data.MRData.SeasonTable.Seasons);
    },
    async racesByYear(_: void, { year }, { dataSources }) {
      return await dataSources.races
        .getYear(year)
        .then((data: any) => data.MRData.RaceTable.Races);
    },
    async raceSelect(_: void, { year, round }, { dataSources }) {
      return await dataSources.races
        .getYearRound(year, round)
        .then((data: any) => data.MRData.RaceTable.Races[0]);
    },
    async historyDrivers(_: void, { pageElements, page }, { dataSources }) {
      return await dataSources.drivers
        .getDrivers(pageElements, page)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async driversYear(_: void, { year }, { dataSources }) {
      return await dataSources.drivers
        .getDriversYear(year)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async driversYearAndRound(_: void, { year, round }, { dataSources }) {
      return await dataSources.drivers
        .getDriversYearAndRound(year, round)
        .then((data: any) => data.MRData.DriverTable.Drivers);
    },
    async driversSelect(_: void, { id }, { dataSources }) {
      return await dataSources.drivers
        .getDriversID(id)
        .then((data: any) => data.MRData.DriverTable.Drivers[0]);
    },
    async seasonPilotsRanking(_: void, { year }, { dataSources }) {
      return await dataSources.standings
        .getSeasonPilotsRanking(year)
        .then((data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    },
    async historyCircuits(_: void, {  pageElements, page}, { dataSources }) {
      return await dataSources.circuits
        .getCircuits(pageElements, page)
        .then((data: any) => data.MRData.CircuitTable.Circuits);
    },
    async circuitSelect(_: void, { id }, { dataSources }) {
      return await dataSources.circuits
        .getCircuitsID(id )
        .then((data: any) => data.MRData.CircuitTable.Circuits[0]);
    }
    
  }
};

export default query;
