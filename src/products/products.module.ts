import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from '../schemas/product.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'inventarios', schema: ProductoSchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
