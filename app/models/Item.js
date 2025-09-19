import mongoose, { mongo } from "mongoose";

//define schema
const itemSchema = new mongoose.Schema({
    name: {type: String},
    plaintext: {type: String},
    icon: {type: String},

    gold: {type: Number},
});

// creates the model
const Item = mongoose.model("Item", itemSchema)

export default Item