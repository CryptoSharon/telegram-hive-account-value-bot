"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dhive_1 = require("@hiveio/dhive");
const config_json_1 = __importDefault(require("../../config.json"));
const vestsToHp_1 = require("../vestsToHp");
async function main() {
    // get hive user "cryptosharon" vests balance
    const client = new dhive_1.Client(config_json_1.default.apiUrls);
    const user = "cryptosharon";
    const vests = await client.database.getAccounts([user]);
    const vestsBalance = vests[0].vesting_shares;
    // convert vests to hp
    const hp = await vestsToHp_1.vestsToHp(client, parseFloat(vestsBalance));
    // log
    console.log(`${user} hp: ${hp}`);
}
main();
