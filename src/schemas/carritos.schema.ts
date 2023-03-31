/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const CarrtrSchema = new Schema({
  idUser: { type: String, required: true },
  emailUser: { type: String, required: true, max: 100 },
  carrito: { type: Array },
  data: { type: Date, default: Date.now },
});
