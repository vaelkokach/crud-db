import { Test, TestingModule } from '@nestjs/testing';
import { AnonimService } from './anonim.service';

describe('AnonimService', () => {
  let service: AnonimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnonimService],
    }).compile();

    service = module.get<AnonimService>(AnonimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
