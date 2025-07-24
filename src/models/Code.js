// models/Code.js
import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);
export default Code;
