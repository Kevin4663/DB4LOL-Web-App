import Champ from "../models/Champ.js";
import Item from "../models/Item.js";
import Meta from "../models/Meta.js";
import { getCurrentVersion } from "./riotServices.js";

export const getChampData = async () => {
  const version = await getCurrentVersion();
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
    console.error("Error fetching champ data:", error);
    return null;
  }
};

export const getItemData = async () => {
  const version = await getCurrentVersion();
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
    console.error("Error fetching item data:", error);
    return null;
  }
};
// accesses the value of the key value pair of data KEY, all the champ objects
// champ data stored in json like
// {
//   "type": "champion",
//   "format": "standAloneComplex",
//   "version": "15.18.1",
//      HERE
//   "data": {
//     "Aatrox": { /* champion object */ },
//     "Ahri": { /* champion object */ },
//     "Akali": { /* champion object */ }
//   }
// }
export const updateChampDatabase = async (currentVersion) => {
  const champData = await getChampData();
  const champArr = Object.values(champData.data);

  // Clear old champs to avoid duplicates
  await Champ.deleteMany({});

  for (const index of champArr) {
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
    };

    await Champ.create(champToInsert);
  }

  // Update Meta entry
  await Meta.findOneAndUpdate(
    { type: "champ" },
    { version: currentVersion, updatedAt: new Date() },
    { upsert: true }
  );

  console.log(`Champ DB updated to ${currentVersion}`);
};

export const updateItemDatabase = async (currentVersion) => {
  const itemData = await getItemData();
  const itemArr = Object.values(itemData.data);

  await Item.deleteMany({});

  for (const index of itemArr) {
    const itemToInsert = {
      name: index.name,
      plaintext: index.plaintext,
      icon: index.image.full,
      gold: index.gold.total,
    };

    await Item.create(itemToInsert);
  }

  await Meta.findOneAndUpdate(
    { type: "item" },
    { version: currentVersion, updatedAt: new Date() },
    { upsert: true }
  );

  console.log(`Item DB updated to ${currentVersion}`);
};

export const getChampsDataFromDB = async () => {
  try {
    const champData = await Champ.find({}, "name icon blurb");
    return champData;
  } catch (error) {
    console.error("Error finding champ data from db", error);
  }
};

export const updateAllDatabase = async () => {
  const currentVersion = await getCurrentVersion();

  const champMeta = await Meta.findOne({ type: "champ" });
  const itemMeta = await Meta.findOne({ type: "item" });

  if (
    champMeta?.version === currentVersion &&
    itemMeta?.version === currentVersion
  ) {
    console.log("Database already up to date");
    return;
  }

  console.log("Updating database...");
  await updateChampDatabase(currentVersion);
  await updateItemDatabase(currentVersion);
};
