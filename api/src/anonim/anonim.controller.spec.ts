import { Test, TestingModule } from '@nestjs/testing';
import { AnonimController } from './anonim.controller';

describe('AnonimController', () => {
  let controller: AnonimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnonimController],
    }).compile();

    controller = module.get<AnonimController>(AnonimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
