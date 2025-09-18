import { get } from "mongoose";
import { getLatestVersion } from "./riotServices.js";
import Champ from "../models/champ.js";
// champ data stored in json like 
// {
//   "type": "champion",
//   "format": "standAloneComplex",
//   "version": "15.18.1",
//   "data": {
//     "Aatrox": { /* champion object */ },
//     "Ahri": { /* champion object */ },
//     "Akali": { /* champion object */ }
//   }
// }
//
export const get_champ_data = async () => {
    const version = await getLatestVersion();
    try {
        const link = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
        const res = await fetch(link);

        if (!res.ok) {
            const errorBody = await res.text();
            console.error(`Champ Data fetch error (${res.status}):`, errorBody);
            return null;
        }

        const dataObject = await res.json();
        return dataObject;

    } catch (error) {
        console.error("Error fetching champ data:", err);
        return null; 
    }

};

export const updateDatabase = async () => {
    const champData = await get_champ_data();
    // accesses the value of the key value pair of data, all the champ objects
    const champArr = Object.values(champData.data)

    for(const index of champArr){
        const champToInsert = {
            name: index.name,
            title: index.title,
            icon: index.image.full,
            blurb: index.blurb,

            hp: index.stats.hp,
            hpperlevel: index.stats.hpperlevel,

            armor: index.stats.armor,
            armorperlevel: index.stats.armorperlevel,

            spellblock: index.stats.spellblock,
            spellblockperlevel: index.stats.spellblockperlevel,

            mp: index.stats.mp,
            mpperlevel: index.stats.mpperlevel,

            attackdamage: index.stats.attackdamage,
            attackdamageperlevel: index.stats.attackdamageperlevel,

            attackspeed: index.stats.attackspeed,
            attackspeedperlevel: index.stats.attackspeedperlevel,
        }

        try {
            const newChamp = new Champ(champToInsert);
            await newChamp.save();
            console.log(`${index.name} added`);
        } catch (error) {
            console.error("Error adding champ to db",err)
        }
    }
};