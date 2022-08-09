import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Book } from './book.entity';
import { BookStoreService } from './book_store.service';

@Controller('book-store')


export class BookStoreController {
    constructor(private bookStoreService:BookStoreService) {

    }
    @Get()
    getBook(): Book[] {
        return this.bookStoreService.getAllBook();
    }

    @Post('/createBook')
    createBook(@Body("title") title: string, @Body("author") author: string, @Body("ISBN") ISBN: string) {
        this.bookStoreService.addBook(title , author, ISBN )
      
    }

    @Delete('deleteBook/:id')
    deleteBook(@Param("id") id:string) {
        console.log(id)
    }
}
