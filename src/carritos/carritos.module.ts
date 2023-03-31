import { Module } from '@nestjs/common';
import { CarritosController } from './carritos.controller';
import { CarritosService } from './carritos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrtrSchema } from '../schemas/carritos.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'carritosCompras', schema: CarrtrSchema },
    ]),
  ],
  controllers: [CarritosController],
  providers: [CarritosService],
})
export class CarritosModule {}
