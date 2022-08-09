import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { Book } from './book.entity';

@Injectable()
export class BookStoreService {
    books:Book[] = []
    addBook(title: string, author: string, ISBN: string) {
        const book = new Book()
        book.title  = title
        book.author = author
        book.ISBN = ISBN
        book.id = "1"
        this.books.push(book);
    }


    getAllBook() {

        return this.books;
    }
}
