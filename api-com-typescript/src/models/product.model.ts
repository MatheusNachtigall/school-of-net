import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: String;
  price: Number;
  quantity: Number;
  date: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
