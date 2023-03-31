import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Param,
  Put,
  NotFoundException,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateCarrtrDto } from './dto/create-carr.dto';
import { CarritosService } from './carritos.service';
import { CreateProdDto } from '../products/dto/create-prod.dto';
@Controller('carritos')
export class CarritosController {
  constructor(private readonly carritoService: CarritosService) {}

  @Get('/carrito/:carId')
  async oneCarForId(@Res() res, @Param('carId') carId) {
    const catchCar = await this.carritoService.allCartrsForId(carId);
    if (!catchCar) throw new NotFoundException('Carrito Aun No existye');
    return res.status(HttpStatus.OK).json({
      catchCar,
    });
  }
  @Post('/crearCarrito')
  async createOneCar(@Res() res, @Body() createCarrtrDto: CreateCarrtrDto) {
    const carOk = await this.carritoService.createCar(createCarrtrDto);
    return res.status(HttpStatus.OK).json({
      message: 'reciveid',
      carOk,
    });
  }
  @Put('carrito/:carId/add')
  async addToCar(
    @Res() res,
    @Param('carId') carId,
    @Body() createProdDto: CreateProdDto,
  ) {
    const addIT = await this.carritoService.addOneItemCar(carId, createProdDto);
    return res.status(HttpStatus.OK).json({
      message: 'reciveid',
      addIT,
    });
  }
  @Delete('/delete/:carId')
  async deleteOneElCar(
    @Res() res,
    @Param('carId') carId,
    @Query('itemEl') itemEl,
  ) {
    const elimElementCar = await this.carritoService.deleteOnElementCartr(
      carId,
      itemEl,
    );
    return res.status(HttpStatus.OK).json({
      message: 'eliminated item',
      elimElementCar,
    });
  }
}
