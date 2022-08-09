import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookStoreModule } from './book_store/book_store.module';
import { DebtCollectorModule } from './debt_collector/debt_collector.module';

@Module({
  imports: [BookStoreModule, DebtCollectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
