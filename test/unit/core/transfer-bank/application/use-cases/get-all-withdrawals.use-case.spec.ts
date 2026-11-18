import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { GetAllWithdrawalsUseCase } from '../../../../../../src/core/transfer-bank/application/use-cases/get-all-withdrawals.use-case';
import { WITHDRAWAL_REPOSITORY } from '../../../../../../src/core/transfer-bank/domain/ports/withdrawal-repository.port';

describe('GetAllWithdrawalsUseCase', () => {
    let useCase: GetAllWithdrawalsUseCase;
    let repository: any;

    beforeEach(async () => {
        repository = { findAll: jest.fn() };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetAllWithdrawalsUseCase,
                { provide: WITHDRAWAL_REPOSITORY, useValue: repository },
            ],
        }).compile();

        useCase = module.get<GetAllWithdrawalsUseCase>(GetAllWithdrawalsUseCase);
    });

    it('should return mapped withdrawals', async () => {
        repository.findAll.mockResolvedValue([{ id: '1', amount: 100 }]);
        const result = await useCase.execute();
        expect(result).toEqual([{ id: '1', amount: 100 }]);
        expect(repository.findAll).toHaveBeenCalled();
    });
});