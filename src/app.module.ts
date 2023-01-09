import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
    }),

    MongooseModule.forRootAsync({
    imports :[ConfigModule],
    useFactory:(configService : ConfigService) => ({uri :configService.get("MONGO_URI")}) ,
    inject:[ConfigService]
    }),

    BooksModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
