/* eslint-disable prettier/prettier */
export class CreateProdDto {
  readonly product: string;
  readonly typeOfLiquor: string;
  readonly price: number;
  readonly image: string;
  readonly description: string;
  readonly stockItems: number;
  readonly codeItem: number;
  readonly data: Date;
}
