import { Test, TestingModule } from '@nestjs/testing';
import { SkillUsersController } from './skill-users.controller';

describe('SkillUsersController', () => {
  let controller: SkillUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillUsersController],
    }).compile();

    controller = module.get<SkillUsersController>(SkillUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
