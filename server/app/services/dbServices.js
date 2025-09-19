import { getLatestVersion } from "./riotServices.js";

import Champ from "../models/Champ.js";
import Item from "../models/Item.js"

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


export const getChampData = async () => {
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

export const getItemData = async () => {
    const version = await getLatestVersion();
    try {
        const link = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`;
        const res = await fetch(link);

        if (!res.ok) {
            const errorBody = await res.text();
            console.error(`Item Data fetch error (${res.status}):`, errorBody);
            return null;
        }

        const dataObject = await res.json();
        return dataObject;

    } catch (error) {
        console.error("Error fetching item data:", err);
        return null; 
    }

};

export const updateChampDatabase = async () => {
    const champData = await getChampData();
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
            console.error("Error adding champ to db",error)
        }
    }
};

export const updateItemDatabase = async () => {
    const ItemData = await getItemData();
    // accesses the value of the key value pair of data, all the item objects
    const itemArr = Object.values(ItemData.data)

    for(const index of itemArr){
        const itemToInsert = {
            name: index.name,
            plaintext: index.plaintext,
            icon: index.image.full,
            blurb: index.gold.total
        }
        try {
            const newItem = new Item(itemToInsert);
            await newItem.save();
            console.log(`${index.name} added`);
        } catch (error) {
            console.error("Error adding item to db",error)
        }
    }
};