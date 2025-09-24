import mongoose from "mongoose";

const metaSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true }, 
  version: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const Meta = mongoose.model("Meta", metaSchema);

export default Meta;
