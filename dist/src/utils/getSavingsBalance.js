"use strict";
/* def get_withdraw_routes(self, account, withdraw_route_type):
        """ get_withdraw_routes """
        return self.call(
            'get_withdraw_routes',
            account,
            withdraw_route_type,
            api='database_api')
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSavingsBalance = void 0;
async function getSavingsBalance(client, account) {
    const acc = await client.database.getAccounts([account]);
    // console.log("hbd", acc[0].savings_hbd_balance);
    // console.log("hive", acc[0].savings_balance);
    return {
        hbd: parseFloat(acc[0].savings_hbd_balance),
        hive: parseFloat(acc[0].savings_balance),
    };
}
exports.getSavingsBalance = getSavingsBalance;
// const client = new Client("https://api.hive.blog");
// getSavingsBalance(client, "cryptosharon");
