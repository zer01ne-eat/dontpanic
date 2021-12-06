import { EntityRepository, Repository } from "typeorm";
import { Users  } from "src/entities/Users";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
    
}