import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarritosModule } from './carritos/carritos.module';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://enriquehm:0h47RMcEkqCLHjTP@cluster0.ckqspop.mongodb.net/ecommerce?retryWrites=true&w=majority',
    ),
    CarritosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
