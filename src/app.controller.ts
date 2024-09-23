import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  #books = [
    {
      title: 'a konyv',
      isbn: '56473'
    },

    {
      title: 'a konyv 2',
      isbn: '564735'
    },

    {
      title: 'a konyv 3',
      isbn: '5647323'
    },

    {
      title: 'a konyv 4',
      isbn: '56473123'
    },

    {
      title: 'a konyv 5',
      isbn: '5647376542'
    }
  ]

  @Get('books')
  @Render('booklist')
  getBooks(){
    return {
      books: this.#books
    }
  }


  @Get()
  @Render('index')
  getHello(@Query('col') col: string = 'white') {
    return {
      col: col,
      message: this.appService.getHello()
    };
  }

  @Get('books/:isbn')
  @Render('books')
  getBookByISBN(@Param('isbn') isbn: string) {
    return {
      title: 'LOTR',
      isbn: isbn
    }
  }
}
