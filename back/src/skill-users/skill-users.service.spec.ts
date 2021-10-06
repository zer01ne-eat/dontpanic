import { Test, TestingModule } from '@nestjs/testing';
import { SkillUsersService } from './skill-users.service';

describe('SkillUsersService', () => {
  let service: SkillUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillUsersService],
    }).compile();

    service = module.get<SkillUsersService>(SkillUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
