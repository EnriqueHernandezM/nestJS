import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { CreateProdDto } from './dto/create-prod.dto';
//import { Products } from 'src/products/interfacesProducts/products.interface';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(readonly productsService: ProductsService) {}

  @Get()
  async allProducts(@Res() res) {
    const all = await this.productsService.allProducts();
    return res.status(HttpStatus.OK).json({
      inventario: all,
    });
  }
  @Get('/:itemId')
  async oneItemForId(@Res() res, @Param('itemId') itemId) {
    const itemCatch = await this.productsService.oneItemForId(itemId);
    if (!itemCatch) throw new NotFoundException('producto no existe');
    return res.status(HttpStatus.OK).json({
      item: itemCatch,
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
  @Put('/:itemId')
  async updateOneItem(
    @Res() res,
    @Param('itemId') itemId,
    @Body() createProductDto: CreateProdDto,
  ) {
    const updateItemOk = await this.productsService.updateOneItem(
      itemId,
      createProductDto,
    );
    if (!updateItemOk) throw new NotFoundException('producto no existe');
    return res.status(HttpStatus.OK).json({
      Message: 'Producto Correctamente Modificado',
      updateItemOk: updateItemOk,
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
