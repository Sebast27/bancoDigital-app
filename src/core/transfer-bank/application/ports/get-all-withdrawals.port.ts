export const GET_ALL_WITHDRAWALS_USE_CASE = 'GET_ALL_WITHDRAWALS_USE_CASE';

export interface IGetAllWithdrawalsUseCase {
    execute(): Promise<Array<{
        id: string;
        accountNumber: string;
        amount: number;
        status: string;
        requestedBy: string;
        reference: string | null;
        createdAt: Date;
        completedAt: Date | null;
    }>>;
}