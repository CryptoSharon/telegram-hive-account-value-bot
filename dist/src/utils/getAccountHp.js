"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountHp = exports.getAccountsHp = void 0;
const vestsToHp_1 = require("./vestsToHp");
/**
 * Look up one or more accounts' HP from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HP for
 */
async function getAccountsHp(client, ...accounts) {
    const vests = await client.database.getAccounts(accounts);
    const promiseArr = vests.map(({ vesting_shares }) => vestsToHp_1.vestsToHp(client, parseFloat(vesting_shares)));
    const hp = await Promise.all(promiseArr);
    return hp;
}
exports.getAccountsHp = getAccountsHp;
function getAccountHp(client, account) {
    return getAccountsHp(client, account).then((hp) => hp[0]);
}
exports.getAccountHp = getAccountHp;
