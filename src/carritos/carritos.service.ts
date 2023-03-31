import { Injectable } from '@nestjs/common';
import { Carrtr } from './interfacesCarritos/carrito.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarrtrDto } from './dto/create-carr.dto';
import { CreateProdDto } from '../products/dto/create-prod.dto';

/* import { ProductsService } from '../products/products.service';
import { Products } from '../products/interfacesProducts/products.interface'; */
@Injectable()
export class CarritosService {
  constructor(
    @InjectModel('carritosCompras') readonly carrtrModel: Model<Carrtr>,
  ) {}

  async allCartrsForId(carId: string): Promise<Carrtr> {
    const allCartrsCatch = await this.carrtrModel.findById(carId);
    return allCartrsCatch;
  }
  async createCar(createCarrtrDto: CreateCarrtrDto): Promise<Carrtr> {
    const item = new this.carrtrModel(createCarrtrDto);
    return await item.save();
  }
  async addOneItemCar(
    carId: string,
    createProdDto: CreateProdDto,
  ): Promise<Carrtr> {
    const agregarItem = await this.carrtrModel.updateOne(
      { _id: carId },
      {
        $push: {
          carrito: createProdDto,
        },
      },
    );
    if (agregarItem.modifiedCount > 0) {
      return await this.allCartrsForId(carId);
    }
  }

  async deleteOnElementCartr(
    carId: string,
    itemToDelete: number,
  ): Promise<Carrtr> {
    const catchCar = await this.allCartrsForId(carId);
    const carrito = catchCar.carrito;
    const trolleyDelete = carrito.find((el) => el.codeItem == itemToDelete);
    const actCar = carrito.splice(trolleyDelete, 1);
    await this.carrtrModel.updateOne(
      { _id: carId },
      {
        $set: {
          carrito: actCar,
        },
      },
    );
    return await this.allCartrsForId(carId);
  }
}
