import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel : Model<BookDocument>){}



  create(createBookDto: CreateBookDto) {


    try{
      return this.bookModel.create(createBookDto)
    }catch(err){
      throw new BadRequestException(err)
    }
    // return 'This action adds a new book';
  }

  findAll() {

    

    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
