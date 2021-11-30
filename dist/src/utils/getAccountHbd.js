"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountHbd = exports.getAccountsHbd = void 0;
/**
 * Look up one or more accounts' HBD from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HBD for
 */
async function getAccountsHbd(client, ...accounts) {
    const result = await client.database.getAccounts(accounts);
    accounts[0];
    return result.map((account) => parseFloat(account.hbd_balance));
}
exports.getAccountsHbd = getAccountsHbd;
async function getAccountHbd(client, account) {
    const balances = await getAccountsHbd(client, account);
    return balances[0];
}
exports.getAccountHbd = getAccountHbd;
