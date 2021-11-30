"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vestsToHp = void 0;
const hivePerMvests_1 = require("./hivePerMvests");
async function vestsToHp(client, vests) {
    const hpm = await hivePerMvests_1.hivePerMvest(client);
    return (vests / 1e6) * hpm;
}
exports.vestsToHp = vestsToHp;
