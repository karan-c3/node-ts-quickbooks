"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickbooks_1 = __importDefault(require("./quickbooks"));
class QuickbooksPayments extends quickbooks_1.default {
    constructor(opts) {
        super(opts);
        opts.baseUrl = 'https://sandbox.api.intuit.com/quickbooks/v4/';
        this.createClient(opts);
    }
    getAllCards(customerId) {
        return this.client.get('customers/' + customerId + '/cards');
    }
    getCard(customerId, cardId) {
        return this.client.get('customers/' + customerId + '/cards/' + cardId);
    }
    createCard(customerId, card) {
        return this.client.post('customers/' + customerId + '/cards', {
            json: card,
        });
    }
    createCardFromToken(customerId, token) {
        return this.client.post('customers/' + customerId + '/cards/createFromToken', {
            json: {
                value: token,
            },
        });
    }
    deleteCard(customerId, cardId) {
        return this.client.delete('customers/' + customerId + '/cards/' + cardId);
    }
    createCharge(charge) {
        return this.client.post('payments/charges', { json: charge });
    }
    getRefund(chargeId, refundId) {
        return this.client.get('payments/charges/' + chargeId + '/refunds/' + refundId);
    }
    getCharge(chargeId) {
        return this.client.get('payments/charges/' + chargeId);
    }
    createRefund(chargeId, refund) {
        return this.client.post('payments/charges/' + chargeId + '/refunds', {
            json: refund,
        });
    }
    captureFunds(chargeId, capture) {
        return this.client.post('payments/charges/' + chargeId + '/capture', {
            json: capture,
        });
    }
    void(chargeId) {
        return this.client.post('payments/txn-requests/' + chargeId + '/void');
    }
}
exports.default = QuickbooksPayments;
