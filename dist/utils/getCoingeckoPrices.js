"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoingeckoPrices = void 0;
const axios_1 = __importDefault(require("axios"));
// get the price of Hive and HBD in USD
async function getCoingeckoPrices() {
    const { data } = await axios_1.default.get("https://api.coingecko.com/api/v3/simple/price?ids=hive,hive_dollar&vs_currencies=usd");
    const { hive_dollar, hive } = data;
    return { hbd: hive_dollar.usd, hive: hive.usd };
}
exports.getCoingeckoPrices = getCoingeckoPrices;
// getCoingeckoPrices().then((prices) => {
//   console.log(prices);
// });
