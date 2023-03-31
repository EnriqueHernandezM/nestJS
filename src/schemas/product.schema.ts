/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const ProductoSchema = new Schema({
  product: { type: String, required: true, max: 100 },
  typeOfLiquor: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  image: { type: String, required: true, max: 100 },
  description: { type: String, required: true },
  stockItems: { type: Number, required: true },
  codeItem: { type: Number, required: true },
  data: { type: Date, default: Date.now },
});
