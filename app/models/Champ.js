import mongoose from "mongoose";

const champSchema = new mongoose.Schema({
    name: {
        type:String,
        reuired:true
    },
    hp: {

    },
},
    {timestamps: true}
);

const Champ = mongoose.model("Champ", champSchema)

export default Champ