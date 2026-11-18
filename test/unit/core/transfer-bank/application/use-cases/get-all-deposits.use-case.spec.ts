import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { GetAllDepositsUseCase } from '../../../../../../src/core/transfer-bank/application/use-cases/get-all-deposits.use-case';
import { DEPOSIT_REPOSITORY } from '../../../../../../src/core/transfer-bank/domain/ports/deposit-repository.port';

describe('GetAllDepositsUseCase', () => {
    let useCase: GetAllDepositsUseCase;
    let repository: any;

    beforeEach(async () => {
        repository = { findAll: jest.fn() };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetAllDepositsUseCase,
                { provide: DEPOSIT_REPOSITORY, useValue: repository },
            ],
        }).compile();

        useCase = module.get<GetAllDepositsUseCase>(GetAllDepositsUseCase);
    });

    it('should return mapped deposits', async () => {
        repository.findAll.mockResolvedValue([{ id: '1', amount: 100 }]);
        const result = await useCase.execute();
        expect(result).toEqual([{ id: '1', amount: 100 }]);
        expect(repository.findAll).toHaveBeenCalled();
    });
});