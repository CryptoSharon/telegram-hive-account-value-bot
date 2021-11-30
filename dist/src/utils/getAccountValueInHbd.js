"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountValueInHbd = void 0;
const getAccountBalances_1 = require("./getAccountBalances");
const hdbMedianPrice_1 = require("./hdbMedianPrice");
async function getAccountValueInHbd(client, account) {
    const balances = getAccountBalances_1.getAccountBalances(client, account);
    const _hbdPrice = hdbMedianPrice_1.hbdMedianPrice(client);
    // const { hbd, hp, hive } = balances;
    // use Promise.all
    const [{ hbd, hp, hive }, hbdPrice] = await Promise.all([
        balances,
        _hbdPrice,
    ]);
    const hbdValueOfHive = hbd + hbdPrice * (hive + hp);
    return hbdValueOfHive;
}
exports.getAccountValueInHbd = getAccountValueInHbd;
// getAccountValueInHbd(new Client("https://api.hive.blog"), "cryptosharon").then(
//   (value) => {
//     console.log(value);
//   }
// );
