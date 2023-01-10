import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createBookDto: CreateBookDto) {
    try {
      return this.bookModel.create(createBookDto);
    } catch (err) {
      throw new BadRequestException(err);
    }

  }

  findAll() {
    try{
      return this.bookModel.find();
    }
     catch(err){
      throw new NotFoundException(err)
     }
    

  }

  findOne(_id: string) {
    if(!_id){
      return null ;
    }
    try{
      return this.bookModel.findById({_id})
    }catch(err){
      throw new NotFoundException(err)
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
