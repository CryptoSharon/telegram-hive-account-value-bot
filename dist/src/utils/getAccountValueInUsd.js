"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountValueInUsd = void 0;
const getAccountBalances_1 = require("./getAccountBalances");
// import { hbdMedianPrice } from "./hdbMedianPrice";
const getCoingeckoPrices_1 = require("./getCoingeckoPrices");
async function getAccountValueInUsd(client, account) {
    const balances = getAccountBalances_1.getAccountBalances(client, account);
    const prices = getCoingeckoPrices_1.getCoingeckoPrices();
    // use Promise.all
    const [{ hbd, hp, hive }, { hive: hivePrice, hbd: hbdPrice }] = await Promise.all([balances, prices]);
    // const { hbd, hp, hive } = await getAccountBalances(client, account);
    // const { hive: hivePrice, hbd: hbdPrice } = await getCoingeckoPrices();
    const hbdValue = hbdPrice * hbd;
    const hiveValue = hivePrice * (hive + hp);
    return hbdValue + hiveValue;
}
exports.getAccountValueInUsd = getAccountValueInUsd;
// getAccountValueInUsd(new Client("https://api.hive.blog"), "cryptosharon").then(
//   (value) => {
//     console.log(value);
//   }
// );
