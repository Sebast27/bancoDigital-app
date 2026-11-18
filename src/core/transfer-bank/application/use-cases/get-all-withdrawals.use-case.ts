import { Inject, Injectable } from "@nestjs/common";
import { IWithdrawalRepository, WITHDRAWAL_REPOSITORY } from "../../domain/ports/withdrawal-repository.port";
import { IGetAllWithdrawalsUseCase } from "../ports/get-all-withdrawals.port";

@Injectable()
export class GetAllWithdrawalsUseCase implements IGetAllWithdrawalsUseCase {
    constructor(
        @Inject(WITHDRAWAL_REPOSITORY)
        private readonly withdrawalRepository: IWithdrawalRepository,
    ) { }

    async execute() {
        const withdrawals = await this.withdrawalRepository.findAll();
        return withdrawals.map((w) => ({
            id: w.id,
            accountNumber: w.accountNumber,
            amount: w.amount,
            status: w.status,
            requestedBy: w.requestedBy,
            reference: w.reference,
            createdAt: w.createdAt,
            completedAt: w.completedAt,
        }));
    }
}