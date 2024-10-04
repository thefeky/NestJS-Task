import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose'; // Adjust if using a different ORM

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const mockUserModel = {
      find: jest.fn().mockResolvedValue([]), // Mock response for find
      findOne: jest.fn().mockResolvedValue(null), // Mock response for findOne
      create: jest.fn().mockResolvedValue({}), // Mock response for create
      // Add other methods as needed
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(), // Mock any methods you might need
          },
        },
        {
          provide: getModelToken('User'), // Replace 'User' with your actual model name
          useValue: mockUserModel, // Use the mocked model
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
