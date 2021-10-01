import Quickbooks from './quickbooks';
declare class QuickbooksPayments extends Quickbooks {
    constructor(opts: QuickbooksArgs);
    getAllCards(customerId: string): Promise<Card[]>;
    getCard(customerId: string, cardId: string): Promise<Card>;
    createCard(customerId: string, card: Card): Promise<Card>;
    createCardFromToken(customerId: string, token: string): Promise<Card>;
    deleteCard(customerId: string, cardId: string): Promise<void>;
    createCharge(charge: Charge): Promise<Charge>;
    getRefund(chargeId: string, refundId: string): Promise<Refund>;
    getCharge(chargeId: string): Promise<Charge>;
    createRefund(chargeId: string, refund: Capture): Promise<Refund>;
    captureFunds(chargeId: string, capture: Capture): Promise<Charge>;
    void(chargeId: string): Promise<VoidObject>;
}
export default QuickbooksPayments;
