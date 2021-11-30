"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountValuesAndBalances = void 0;
const getAccountBalances_1 = require("./getAccountBalances");
const getAccountValueInUsd_1 = require("./getAccountValueInUsd");
const getAccountValueInHbd_1 = require("./getAccountValueInHbd");
async function getAccountValuesAndBalances(client, account) {
    const functions = [
        getAccountBalances_1.getAccountBalances,
        getAccountValueInUsd_1.getAccountValueInUsd,
        getAccountValueInHbd_1.getAccountValueInHbd,
    ];
    const values = await Promise.all([
        getAccountBalances_1.getAccountBalances(client, account),
        getAccountValueInUsd_1.getAccountValueInUsd(client, account),
        getAccountValueInHbd_1.getAccountValueInHbd(client, account),
    ]);
    return {
        balances: values[0],
        valueInUsd: values[1],
        valueInHbd: values[2],
    };
}
exports.getAccountValuesAndBalances = getAccountValuesAndBalances;
// getAccountValuesAndBalances(new Client("https://api.hive.blog"), "cryptosharon").then(
//   console.log
// );
