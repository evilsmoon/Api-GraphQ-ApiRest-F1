import { IResolvers } from "graphql-tools";
// import { LIST } from "./resolversMap";
import { getWikipediaMobileUrl } from '../lib/utils';
const type: IResolvers = {
    Season: {
        year :parent =>parent.season,
        urlMobile :parent =>getWikipediaMobileUrl(parent.url)
    }
}

export default type;