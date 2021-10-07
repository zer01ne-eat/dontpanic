import { EntityRepository, Repository } from "typeorm";
import { DMs  } from "src/entities/DMs";

@EntityRepository(DMs)
export class DmsRepository extends Repository<DMs> {
    
}