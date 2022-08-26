import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from '../../email.module';
import { AddEmailController } from './add-email.controller';

describe('AddEmailController', () => {
  let controller: AddEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EmailModule],
      controllers: [AddEmailController],
    }).compile();

    controller = module.get<AddEmailController>(AddEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
