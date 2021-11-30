"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountHive = exports.getAccountsHive = void 0;
/**
 * Look up one or more accounts' HIVE from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HIVE for
 */
async function getAccountsHive(client, ...accounts) {
    const result = await client.database.getAccounts(accounts);
    return result.map((account) => parseFloat(account.balance));
}
exports.getAccountsHive = getAccountsHive;
async function getAccountHive(client, account) {
    const balances = await getAccountsHive(client, account);
    return balances[0];
}
exports.getAccountHive = getAccountHive;
