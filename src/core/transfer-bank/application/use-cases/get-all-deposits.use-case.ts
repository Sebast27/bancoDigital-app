import { Inject, Injectable } from '@nestjs/common';
import { DEPOSIT_REPOSITORY, IDepositRepository } from '../../domain/ports/deposit-repository.port';
import { IGetAllDepositsUseCase } from '../ports/get-all-deposits.port';

@Injectable()
export class GetAllDepositsUseCase implements IGetAllDepositsUseCase {
    constructor(
        @Inject(DEPOSIT_REPOSITORY)
        private readonly depositRepository: IDepositRepository,
    ) { }

    async execute() {
        const deposits = await this.depositRepository.findAll();
        return deposits.map((d) => ({
            id: d.id,
            accountNumber: d.accountNumber,
            amount: d.amount,
            status: d.status,
            requestedBy: d.requestedBy,
            approvedBy: d.approvedBy,
            reference: d.reference,
            createdAt: d.createdAt,
            approvedAt: d.approvedAt,
            completedAt: d.completedAt,
        }));
    }
}