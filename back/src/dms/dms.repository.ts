import { EntityRepository, Repository } from "typeorm";
import { DMs } from "src/entities/DMs";

@EntityRepository(DMs)
export class DMsRepository extends Repository<DMs> {
    
}