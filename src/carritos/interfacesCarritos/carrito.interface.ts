/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Carrtr extends Document {
  readonly idUser: string;
  readonly emailUser: string;
  readonly carrito: [
    {
      readonly product: string;
      readonly typeOfLiquor: string;
      readonly price: number;
      readonly image: string;
      readonly description: string;
      readonly stockItems: number;
      readonly codeItem: number;
    },
  ];
  //readonly data: Date;
}
