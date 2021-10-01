"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickbooks_1 = __importDefault(require("./quickbooks"));
class QuickbooksOnline extends quickbooks_1.default {
    constructor(opts) {
        super(opts);
        this.createAccount = (account) => {
            return this.client.post('account', { json: account });
        };
        // createAttachable(attachable: Attachable): Promise<Attachable> => {
        //   return this.client.post('attachable', { json: attachable });
        // }
        this.createBill = (bill) => {
            return this.client.post('bill', { json: bill });
        };
        this.createBillPayment = (billPayment) => {
            return this.client.post('billpayment', { json: billPayment });
        };
        this.createClass = (klass) => {
            return this.client.post('class', { json: klass });
        };
        this.createCreditMemo = (creditMemo) => {
            return this.client.post('creditmemo', { json: creditMemo });
        };
        this.createCustomer = (customer) => {
            return this.client.post('customer', { json: customer });
        };
        this.createDepartment = (department) => {
            return this.client.post('department', { json: department });
        };
        this.createDeposit = (deposit) => {
            return this.client.post('deposit', { json: deposit });
        };
        this.createEmployee = (employee) => {
            return this.client.post('employee', { json: employee });
        };
        this.createEstimate = (estimate) => {
            return this.client.post('estimate', { json: estimate });
        };
        this.createInvoice = (invoice) => {
            return this.client.post('invoice', { json: invoice });
        };
        this.createItem = (item) => {
            return this.client.post('item', { json: item });
        };
        this.createJournalCode = (journalCode) => {
            return this.client.post('journalcode', { json: journalCode });
        };
        this.createJournalEntry = (journalEntry) => {
            return this.client.post('journalentry', { json: journalEntry });
        };
        this.createPayment = (payment) => {
            return this.client.post('payment', { json: payment });
        };
        this.createPaymentMethod = (paymentMethod) => {
            return this.client.post('paymentmethod', { json: paymentMethod });
        };
        this.createPurchase = (purchase) => {
            return this.client.post('purchase', { json: purchase });
        };
        this.createPurchaseOrder = (purchaseOrder) => {
            return this.client.post('purchaseorder', { json: purchaseOrder });
        };
        this.createRefundReceipt = (refundReceipt) => {
            return this.client.post('refundreceipt', { json: refundReceipt });
        };
        this.createSalesReceipt = (salesReceipt) => {
            return this.client.post('salesreceipt', { json: salesReceipt });
        };
        this.createTaxAgency = (taxAgency) => {
            return this.client.post('taxagency', { json: taxAgency });
        };
        this.createTaxService = (taxService) => {
            return this.client.post('taxservice', { json: taxService });
        };
        this.createTerm = (term) => {
            return this.client.post('term', { json: term });
        };
        this.createTimeActivity = (timeActivity) => {
            return this.client.post('timeactivity', { json: timeActivity });
        };
        this.createTransfer = (transfer) => {
            return this.client.post('transfer', { json: transfer });
        };
        this.createVendor = (vendor) => {
            return this.client.post('vendor', { json: vendor });
        };
        this.createVendorCredit = (vendorCredit) => {
            return this.client.post('vendorcredit', { json: vendorCredit });
        };
        this.getAccount = (id) => {
            return this.client.get('account/' + id);
        };
        // getAttachable(id: string): Promise<Attachable> => {
        //   return this.client.get('attachable/' + id);
        // }
        this.getBill = (id) => {
            return this.client.get('bill/' + id);
        };
        this.getBillPayment = (id) => {
            return this.client.get('billpayment/' + id);
        };
        this.getClass = (id) => {
            return this.client.get('class/' + id);
        };
        this.getCompanyInfo = (id) => {
            return this.client.get('companyinfo/' + id);
        };
        this.getCompanyCurrency = (id) => {
            return this.client.get('companycurrency/' + id);
        };
        this.getCreditMemo = (id) => {
            return this.client.get('creditmemo/' + id);
        };
        this.getCustomer = (id) => {
            return this.client.get('customer/' + id);
        };
        this.getCustomerType = (id) => {
            return this.client.get('customertype/' + id);
        };
        this.getDepartment = (id) => {
            return this.client.get('department/' + id);
        };
        this.getDeposit = (id) => {
            return this.client.get('deposit/' + id);
        };
        this.getEmployee = (id) => {
            return this.client.get('employee/' + id);
        };
        this.getEstimate = (id) => {
            return this.client.get('estimate/' + id);
        };
        this.getExchangeRate = (options) => {
            return this.client.get('exchangerate', { searchParams: options });
        };
        this.getEstimatePdf = (id) => {
            return this.client.get('estimate/' + id);
        };
        this.sendEstimatePdf = (id, sendTo) => {
            return this.client.post('estimate/' + id + '/send', {
                searchParams: { sendTo },
            });
        };
        this.getInvoice = (id) => {
            return this.client.get('invoice/' + id);
        };
        this.getInvoicePdf = (id) => {
            return this.client.get('invoice/' + id);
        };
        this.sendInvoicePdf = (id, json) => {
            return this.client.post('invoice/' + id + '/send', {
                json,
            });
        };
        this.sendPurchaseOrder = (id, sendTo) => {
            return this.client.post('purchaseorder/' + id + '/send', {
                searchParams: { sendTo },
            });
        };
        this.getItem = (id) => {
            return this.client.get('item/' + id);
        };
        this.getJournalCode = (id) => {
            return this.client.get('journalcode/' + id);
        };
        this.getJournalEntry = (id) => {
            return this.client.get('journalentry/' + id);
        };
        this.getPayment = (id) => {
            return this.client.get('payment/' + id);
        };
        this.getPaymentMethod = (id) => {
            return this.client.get('paymentmethod/' + id);
        };
        this.getPurchase = (id) => {
            return this.client.get('purchase/' + id);
        };
        this.getPurchaseOrder = (id) => {
            return this.client.get('purchaseorder/' + id);
        };
        this.getRefundReceipt = (id) => {
            return this.client.get('refundreceipt/' + id);
        };
        this.getReports = (id) => {
            return this.client.get('reports/' + id);
        };
        this.getSalesReceipt = (id) => {
            return this.client.get('salesreceipt/' + id);
        };
        this.getSalesReceiptPdf = (id) => {
            return this.client.get('salesreceipt/' + id);
        };
        this.sendSalesReceiptPdf = (id, sendTo) => {
            return this.client.post('salesreceipt/' + id + '/send', {
                searchParams: { sendTo },
            });
        };
        this.getTaxAgency = (id) => {
            return this.client.get('taxagency/' + id);
        };
        this.getTaxCode = (id) => {
            return this.client.get('taxcode/' + id);
        };
        this.getTaxRate = (id) => {
            return this.client.get('taxrate/' + id);
        };
        this.getTerm = (id) => {
            return this.client.get('term/' + id);
        };
        this.getTimeActivity = (id) => {
            return this.client.get('timeactivity/' + id);
        };
        this.getTransfer = (id) => {
            return this.client.get('transfer/' + id);
        };
        this.getVendor = (id) => {
            return this.client.get('vendor/' + id);
        };
        this.getVendorCredit = (id) => {
            return this.client.get('vendorcredit/' + id);
        };
        this.updateAccount = (account) => {
            return this.client.post('account', { json: account });
        };
        // updateAttachable(attachable: Attachable): Promise<Attachable> => {
        //   return this.client.post('attachable', { json: attachable });
        // }
        this.updateBill = (bill) => {
            return this.client.post('bill', { json: bill });
        };
        this.updateBillPayment = (billPayment) => {
            return this.client.post('billpayment', { json: billPayment });
        };
        this.updateClass = (klass) => {
            return this.client.post('class', { json: klass });
        };
        this.updateCompanyInfo = (companyInfo) => {
            return this.client.post('companyinfo', { json: companyInfo });
        };
        this.updateCreditMemo = (creditMemo) => {
            return this.client.post('creditmemo', { json: creditMemo });
        };
        this.updateCustomer = (customer) => {
            return this.client.post('customer', { json: customer });
        };
        this.updateDepartment = (department) => {
            return this.client.post('department', { json: department });
        };
        this.updateDeposit = (deposit) => {
            return this.client.post('deposit', { json: deposit });
        };
        this.updateEmployee = (employee) => {
            return this.client.post('employee', { json: employee });
        };
        this.updateEstimate = (estimate) => {
            return this.client.post('estimate', { json: estimate });
        };
        this.updateInvoice = (invoice) => {
            return this.client.post('invoice', { json: invoice });
        };
        this.updateItem = (item) => {
            return this.client.post('item', { json: item });
        };
        this.updateJournalCode = (journalCode) => {
            return this.client.post('journalcode', { json: journalCode });
        };
        this.updateJournalEntry = (journalEntry) => {
            return this.client.post('journalentry', { json: journalEntry });
        };
        this.updatePayment = (payment) => {
            return this.client.post('payment', { json: payment });
        };
        this.updatePaymentMethod = (paymentMethod) => {
            return this.client.post('paymentmethod', { json: paymentMethod });
        };
        // updatePreferences(preferences: Preferences): Promise<Preferences> => {
        //   return this.client.post('preferences', { json: preferences });
        // }
        this.updatePurchase = (purchase) => {
            return this.client.post('purchase', { json: purchase });
        };
        this.updatePurchaseOrder = (purchaseOrder) => {
            return this.client.post('purchaseorder', { json: purchaseOrder });
        };
        this.updateRefundReceipt = (refundReceipt) => {
            return this.client.post('refundreceipt', { json: refundReceipt });
        };
        this.updateSalesReceipt = (salesReceipt) => {
            return this.client.post('salesreceipt', { json: salesReceipt });
        };
        this.updateTaxAgency = (taxAgency) => {
            return this.client.post('taxagency', { json: taxAgency });
        };
        this.updateTaxCode = (taxCode) => {
            return this.client.post('taxcode', { json: taxCode });
        };
        this.updateTaxRate = (taxRate) => {
            return this.client.post('taxrate', { json: taxRate });
        };
        this.updateTerm = (term) => {
            return this.client.post('term', { json: term });
        };
        this.updateTimeActivity = (timeActivity) => {
            return this.client.post('timeactivity', { json: timeActivity });
        };
        this.updateTransfer = (transfer) => {
            return this.client.post('transfer', { json: transfer });
        };
        this.updateVendor = (vendor) => {
            return this.client.post('vendor', { json: vendor });
        };
        this.updateVendorCredit = (vendorCredit) => {
            return this.client.post('vendorcredit', { json: vendorCredit });
        };
        this.updateExchangeRate = (exchangeRate) => {
            return this.client.post('exchangerate', { json: exchangeRate });
        };
        // deleteAttachable(idOrEntity: string | Attachable): Promise<Attachable> => {
        //   return this.client.deleteEntity('attachable', {  idOrEntity });
        // }
        this.deleteCustomer = (idOrEntity) => {
            return this.client.deleteEntity('customer', idOrEntity);
        };
        this.deleteClass = (idOrEntity) => {
            return this.client.deleteEntity('class', idOrEntity);
        };
        this.deleteDepartment = (idOrEntity) => {
            return this.client.deleteEntity('department', idOrEntity);
        };
        this.deleteEmployee = (idOrEntity) => {
            return this.client.deleteEntity('employee', idOrEntity);
        };
        this.deleteItem = (idOrEntity) => {
            return this.client.deleteEntity('item', idOrEntity);
        };
        this.deletePaymentMethod = (idOrEntity) => {
            return this.client.deleteEntity('paymentmethod', idOrEntity);
        };
        this.deleteTerm = (idOrEntity) => {
            return this.client.deleteEntity('term', idOrEntity);
        };
        this.deleteVendor = (idOrEntity) => {
            return this.client.deleteEntity('vendor', idOrEntity);
        };
        this.deleteBill = (idOrEntity) => {
            return this.client.deleteEntity('bill', idOrEntity);
        };
        this.deleteBillPayment = (idOrEntity) => {
            return this.client.deleteEntity('billpayment', idOrEntity);
        };
        this.deleteCreditMemo = (idOrEntity) => {
            return this.client.deleteEntity('creditmemo', idOrEntity);
        };
        this.deleteDeposit = (idOrEntity) => {
            return this.client.deleteEntity('deposit', idOrEntity);
        };
        this.deleteEstimate = (idOrEntity) => {
            return this.client.deleteEntity('estimate', idOrEntity);
        };
        this.deleteInvoice = (idOrEntity) => {
            return this.client.deleteEntity('invoice', idOrEntity);
        };
        this.deleteJournalCode = (idOrEntity) => {
            return this.client.deleteEntity('journalcode', idOrEntity);
        };
        this.deleteJournalEntry = (idOrEntity) => {
            return this.client.deleteEntity('journalentry', idOrEntity);
        };
        this.deletePayment = (idOrEntity) => {
            return this.client.deleteEntity('payment', idOrEntity);
        };
        this.deletePurchase = (idOrEntity) => {
            return this.client.deleteEntity('purchase', idOrEntity);
        };
        this.deletePurchaseOrder = (idOrEntity) => {
            return this.client.deleteEntity('purchaseorder', idOrEntity);
        };
        this.deleteRefundReceipt = (idOrEntity) => {
            return this.client.delete('refundreceipt', idOrEntity);
        };
        this.deleteSalesReceipt = (idOrEntity) => {
            return this.client.deleteEntity('salesreceipt', idOrEntity);
        };
        this.deleteTimeActivity = (idOrEntity) => {
            return this.client.deleteEntity('timeactivity', idOrEntity);
        };
        this.deleteTransfer = (idOrEntity) => {
            return this.client.deleteEntity('transfer', idOrEntity);
        };
        this.deleteVendorCredit = (idOrEntity) => {
            return this.client.deleteEntity('vendorcredit', idOrEntity);
        };
        this.findAccounts = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        // findAttachables(statement: string): Promise<Attachable[]> => {
        //   return this.client.get('query', {searchParams: { query: statement }});
        // }
        this.findBills = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findBillPayments = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findBudgets = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findClasses = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findCompanyInfos = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findCompanyCurrencies = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findCreditMemos = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findCustomers = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findCustomerTypes = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findDepartments = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findDeposits = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findEmployees = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findEstimates = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findInvoices = (statement, includeLink) => {
            const opts = {
                searchParams: { include: '', query: statement },
            };
            if (includeLink)
                opts.searchParams.include = 'invoiceLink';
            return this.client.get('query', opts);
        };
        this.findItems = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findJournalCodes = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findJournalEntries = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findPayments = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findPaymentMethods = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        // findPreferenceses(statement: string): Promise<Preferences[]> => {
        //   return this.client.get('query', { searchParams: { query: statement } });
        // }
        this.findPurchases = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findPurchaseOrders = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findRefundReceipts = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findSalesReceipts = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTaxAgencies = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTaxCodes = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTaxRates = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTerms = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTimeActivities = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findTransfers = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findVendors = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findVendorCredits = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.findExchangeRates = (statement) => {
            return this.client.get('query', { searchParams: { query: statement } });
        };
        this.reportBalanceSheet = (options) => {
            return this.client.get('reports/BalanceSheet', { searchParams: options });
        };
        this.reportProfitAndLoss = (options) => {
            return this.client.get('reports/ProfitAndLoss', { searchParams: options });
        };
        this.reportProfitAndLossDetail = (options) => {
            return this.client.get('reports/ProfitAndLossDetail', {
                searchParams: options,
            });
        };
        this.reportTrialBalance = (options) => {
            return this.client.get('reports/TrialBalance', { searchParams: options });
        };
        this.reportTrialBalanceFR = (options) => {
            return this.client.get('reports/TrialBalanceFR', {
                searchParams: options,
            });
        };
        this.reportCashFlow = (options) => {
            return this.client.get('reports/CashFlow', { searchParams: options });
        };
        this.reportInventoryValuationSummary = (options) => {
            return this.client.get('reports/InventoryValuationSummary', {
                searchParams: options,
            });
        };
        this.reportCustomerSales = (options) => {
            return this.client.get('reports/CustomerSales', { searchParams: options });
        };
        this.reportItemSales = (options) => {
            return this.client.get('reports/ItemSales', { searchParams: options });
        };
        this.reportCustomerIncome = (options) => {
            return this.client.get('reports/CustomerIncome', {
                searchParams: options,
            });
        };
        this.reportCustomerBalance = (options) => {
            return this.client.get('reports/CustomerBalance', {
                searchParams: options,
            });
        };
        this.reportCustomerBalanceDetail = (options) => {
            return this.client.get('reports/CustomerBalanceDetail', {
                searchParams: options,
            });
        };
        this.reportAgedReceivables = (options) => {
            return this.client.get('reports/AgedReceivables', {
                searchParams: options,
            });
        };
        this.reportAgedReceivableDetail = (options) => {
            return this.client.get('reports/AgedReceivableDetail', {
                searchParams: options,
            });
        };
        this.reportVendorBalance = (options) => {
            return this.client.get('reports/VendorBalance', { searchParams: options });
        };
        this.reportVendorBalanceDetail = (options) => {
            return this.client.get('reports/VendorBalanceDetail', {
                searchParams: options,
            });
        };
        this.reportAgedPayables = (options) => {
            return this.client.get('reports/AgedPayables', { searchParams: options });
        };
        this.reportAgedPayableDetail = (options) => {
            return this.client.get('reports/AgedPayableDetail', {
                searchParams: options,
            });
        };
        this.reportVendorExpense = (options) => {
            return this.client.get('reports/VendorExpenses', {
                searchParams: options,
            });
        };
        this.reportTransactionList = (options) => {
            return this.client.get('reports/TransactionList', {
                searchParams: options,
            });
        };
        this.reportGeneralLedger = (options) => {
            return this.client.get('reports/GeneralLedger', { searchParams: options });
        };
        this.reportTaxSummary = (options) => {
            return this.client.get('reports/TaxSummary', { searchParams: options });
        };
        this.reportDepartmentSales = (options) => {
            return this.client.get('reports/DepartmentSales', {
                searchParams: options,
            });
        };
        this.reportClassSales = (options) => {
            return this.client.get('reports/ClassSales', { searchParams: options });
        };
        this.reportAccountList = (options) => {
            return this.client.get('reports/AccountList', { searchParams: options });
        };
        this.reportJournalReport = (options) => {
            return this.client.get('reports/JournalReport', { searchParams: options });
        };
        opts.baseUrl =
            'https://sandbox-quickbooks.api.intuit.com/v3/company/' +
                opts.realmId +
                '/';
        opts.defaults = {
            params: { minorversion: opts.minorVersion || '59' },
        };
        this.createClient(opts);
    }
}
exports.default = QuickbooksOnline;
