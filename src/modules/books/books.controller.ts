import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/create')
  async create(@Body() createBookDto: CreateBookDto, @Res() res: Response) {
    const data = await this.booksService.create(createBookDto);

    res.status(HttpStatus.OK).send({
      success: HttpStatus.OK,
      message: 'Success:> Book Details Created ',
      data,
    });
  }

  @Get('/getAll')
  async findAll(@Res() res: Response) {
    const data = await this.booksService.findAll();

    res.status(HttpStatus.OK).send({
      success: HttpStatus.OK,
      data,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const data = await this.booksService.findOne(id);
    
    

    res.status(HttpStatus.OK).send({
      success: HttpStatus.OK,
      data,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
    @Res() res: Response,
  ) {
    const data = await this.booksService.update(+id, updateBookDto);

    res.status(HttpStatus.CREATED).send({
      success: HttpStatus.OK,
      message: 'Success :> Updated ',
      data,
    });
  }
}
