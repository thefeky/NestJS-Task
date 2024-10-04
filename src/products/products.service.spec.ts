
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose'; // For Mongoose model injection

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        ConfigService,  // Mocking ConfigService
        {
          provide: getModelToken('Product'),  // Mocking the ProductModel
          useValue: {},  // Use a mock or fake implementation of the model here
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});