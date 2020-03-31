import { IResolvers } from "graphql-tools";
// import { LIST } from "./resolversMap";
import { dataSources } from '../data/index';

const query: IResolvers = {
    Query: {
        async SeasonsList(_:void,__:any,{dataSources}){
            return await dataSources.seasons.getSeasons().then(
                (data:any)=>data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_:void,{year},{dataSources}){
            return await dataSources.races.getYear(year).then(
                (data:any)=>data.MRData.RaceTable.Races
            );
        }

    }
}

export default query;