import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DebtCollectorService } from './debt_collector.service';
import { Person } from './person.entity';

@Controller('debt_collector')
export class DebtCollectorController {
    constructor(private debtCollectorService: DebtCollectorService) {

    }
    @Get()
    index() : Person[] {
        console.log('get all');
        return this.debtCollectorService.getAll()
         
    }

    @Post('/create_wanted_person')
    create(
        @Body("firstname") firstname: string,
        @Body("lastname") lastname: string,
        @Body('social_accounts') social_accounts: string[],
        @Body('debt_summary') debt_summary: Number) {
        return this.debtCollectorService.addNewPerson(firstname, lastname, debt_summary, social_accounts)
        
    }

    @Delete('delete/:bounty_id')

    deleteById(@Param("bounty_id") bounty_id : string) {
        return this.debtCollectorService.deletePerson(bounty_id)
    }




}
