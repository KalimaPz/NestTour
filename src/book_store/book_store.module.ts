import { Module } from '@nestjs/common';
import { BookStoreController } from './book_store.controller';
import { BookStoreService } from './book_store.service';

@Module({
  controllers: [BookStoreController],
  providers: [BookStoreService]
})
export class BookStoreModule {}
