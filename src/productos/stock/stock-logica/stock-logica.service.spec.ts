import { Test, TestingModule } from '@nestjs/testing';
import { StockLogicaService } from './stock-logica.service';

describe('StockLogicaService', () => {
  let service: StockLogicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockLogicaService],
    }).compile();

    service = module.get<StockLogicaService>(StockLogicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
