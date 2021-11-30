"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountBalances = void 0;
const getAccountHbd_1 = require("./getAccountHbd");
const getAccountHp_1 = require("./getAccountHp");
const getAccountHive_1 = require("./getAccountHive");
async function getAccountBalances(client, account) {
    const hive = await getAccountHive_1.getAccountHive(client, account);
    const hp = await getAccountHp_1.getAccountHp(client, account);
    const hbd = await getAccountHbd_1.getAccountHbd(client, account);
    return {
        hive: hive,
        hp: hp,
        hbd: hbd,
    };
}
exports.getAccountBalances = getAccountBalances;
