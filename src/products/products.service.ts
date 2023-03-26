import { Injectable } from '@nestjs/common';
import { Products } from 'src/products/interfacesProducts/products.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProdDto } from './dto/create-prod.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('inventarios') readonly productModel: Model<Products>,
  ) {}

  async allProducts(): Promise<Products[]> {
    const allItems = await this.productModel.find({});
    return allItems;
  }
  async saveNewProduct(createProdDto: CreateProdDto): Promise<Products> {
    const item = new this.productModel(createProdDto);
    return await item.save();
  }
  async deleteOneProduct(itemId: string): Promise<Products> {
    const deleteItem = await this.productModel.findByIdAndDelete(itemId);
    return deleteItem;
  }
  async updateOneItem(
    itemId: string,
    createProdDto: CreateProdDto,
  ): Promise<Products> {
    const itemUpdate = await this.productModel.findByIdAndUpdate(
      itemId,
      createProdDto,
      { new: true },
    );
    return itemUpdate;
  }
}
////////////////////////////////////Para obtener parametros
/*  Get(':id')

  getById(@Param('id') id: string) {

    return this.catsService.getById(id);

  }@ */
