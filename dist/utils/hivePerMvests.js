"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hivePerMvest = void 0;
//prettier-ignore
async function hivePerMvest(client) {
    const result = await client.database.call("get_dynamic_global_properties", []);
    const { total_vesting_fund_hive, total_vesting_shares, } = result;
    const hivePerMvest = (parseFloat(total_vesting_fund_hive) / (parseFloat(total_vesting_shares) / 1e6));
    return hivePerMvest;
}
exports.hivePerMvest = hivePerMvest;
