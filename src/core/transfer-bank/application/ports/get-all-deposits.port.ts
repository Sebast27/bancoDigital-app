export const GET_ALL_DEPOSITS_USE_CASE = 'GET_ALL_DEPOSITS_USE_CASE';

export interface IGetAllDepositsUseCase {
    execute(): Promise<Array<{
        id: string;
        accountNumber: string;
        amount: number;
        status: string;
        requestedBy: string;
        approvedBy: string | null;
        reference: string | null;
        createdAt: Date;
        approvedAt: Date | null;
        completedAt: Date | null;
    }>>;
}