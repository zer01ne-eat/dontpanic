import { EntityRepository, Repository } from "typeorm";
import { Skills  } from "src/entities/Skills";

@EntityRepository(Skills)
export class SkillsRepository extends Repository<Skills> {
    
}