import {  Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Person } from './person.entity';
import { v4 as UUidV4 } from 'uuid'
@Injectable()
export class DebtCollectorService {
    wanted_persons: Person[] = []

    deletePerson(bounty_id: string) : Object{
        let index = 0;
        try {

            if (this.wanted_persons.length === 0 || bounty_id === null) {
                throw UnprocessableEntityException
            }
            index = this.wanted_persons.findIndex((person) => person.bounty_id === bounty_id)
            this.wanted_persons.splice(index, 1)
            return {
                status : true, msg : "delete complete"
            }

        } catch (err) {
            console.log(err)
            return {
                status : false, msg : "cannot delete"
            }
        }
    }
    addNewPerson(firstname: string, lastname: string, debt_summary: Number, social_account: string[]): Object {

        const person = new Person()
        // console.log(`${firstname} , ${lastname} ${debt_summary} , ${social_account}`)

        try {
            person.firstname = firstname
            person.lastname = lastname
            person.debt_summary = debt_summary
            person.social_account = social_account
            person.bounty_id = UUidV4()
            this.wanted_persons.push(person)
            return {
                status: true, msg: "create done!", data: person


            }
        } catch (err) {

            return {
                status: false,
            }
        }





    }

    getAll(): Person[] {
        console.log(this.wanted_persons)
        return this.wanted_persons;
    }

}
