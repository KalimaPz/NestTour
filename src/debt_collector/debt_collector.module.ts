import { Module } from '@nestjs/common';
import { DebtCollectorController } from './debt_collector.controller';
import { DebtCollectorService } from './debt_collector.service';

@Module({
  controllers: [DebtCollectorController],
  providers: [DebtCollectorService]
})
export class DebtCollectorModule {}
