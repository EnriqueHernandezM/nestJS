/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Carrtr extends Document {
  readonly idUser: string;
  readonly emailUser: string;
  readonly carrito: [
    {
      product: 'Don Pedro';
      typeOfLiquor: 'Brandy';
      price: 355;
      image: 'https://cdn.shopify.com/s/files/1/0402/2475/1766/products/BRANDYDONPEDRO1000MLSHOPIFY_700x.jpg?v=1637864473';
      description: 'Brandy Don Pedro Reserva Especial 750 ml a un súper precio';
      stockItems: number;
      codeItem: number;
    },
  ];
  //readonly data: Date;
}
