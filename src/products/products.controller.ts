import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateProdDto } from './dto/create-prod.dto';
import { Products } from 'src/products/interfacesProducts/products.interface';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async allProducts(@Res() res): Promise<Products[]> {
    const all = await this.productsService.allProducts();
    return res.status(HttpStatus.OK).json({
      inventario: all,
    });
  }
  @Post()
  async saveNewProduct(@Res() res, @Body() createProdDto: CreateProdDto) {
    const item = await this.productsService.saveNewProduct(createProdDto);
    return res.status(HttpStatus.OK).json({
      message: 'reciveid',
      itemSaves: item,
    });
  }
  @Delete('/:itemId')
  async deleteOneItem(@Res() res, @Param('itemId') itemId) {
    const deleteI = await this.productsService.deleteOneProduct(itemId);
    if (!deleteI) throw new NotFoundException('producto no existe');
    return res.status(HttpStatus.OK).json({
      message: 'producto Eliminado',
      itemDelete: deleteI,
    });
  }
}
