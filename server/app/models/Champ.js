import mongoose, { mongo } from "mongoose";

//define schema
const champSchema = new mongoose.Schema({
    name: {type: String},
    title: {type: String},
    icon: {type: String},
    blurb: {type: String},

    hp: {type: Number},
    hpperlevel: {type: Number},

    armor: {type: Number},
    armorperlevel: {type: Number},

    spellblock: {type: Number},
    spellblockperlevel: {type: Number},

    mp: {type: Number},
    mpperlevel: {type: Number},

    attackdamage: {type: Number},
    attackdamageperlevel: {type: Number},

    attackspeed: {type: Number},
    attackspeedperlevel: {type: Number},
});

// creates the model
const Champ = mongoose.model("Champ", champSchema)

export default Champ