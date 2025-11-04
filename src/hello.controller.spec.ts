import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();

    helloController = module.get<HelloController>(HelloController);
  });

  it('should return "Hello World!"', () => {
    expect(helloController.getHello()).toBe('Hello World!');
  });

  it('should not return empty string', () => {
    expect(helloController.getHello()).not.toBe("");
  });
});
