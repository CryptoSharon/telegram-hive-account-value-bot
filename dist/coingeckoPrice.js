"use strict";
// CoinGecko Price for HDB
// using axios. this url: https://api.coingecko.com/api/v3/coins/hive_dollar
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://api.coingecko.com/api/v3/coins/hive_dollar")
    .then(function (response) {
    console.log(response.data.market_data.current_price.usd);
});
