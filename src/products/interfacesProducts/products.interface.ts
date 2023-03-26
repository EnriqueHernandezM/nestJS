import { Document } from 'mongoose';
export interface Products extends Document {
  readonly product: string;
  readonly typeOfLiquor: string;
  readonly price: number;
  readonly image: string;
  readonly description: string;
  readonly stockItems: number;
  readonly codeItem: number;
}
