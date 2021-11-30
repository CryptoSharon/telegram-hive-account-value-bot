/* def get_withdraw_routes(self, account, withdraw_route_type):
        """ get_withdraw_routes """
        return self.call(
            'get_withdraw_routes',
            account,
            withdraw_route_type,
            api='database_api')
*/

import { Client } from "@hiveio/dhive";

export async function getSavingsBalance(client: Client, account: string) {
  const acc = await client.database.getAccounts([account]);
  // console.log("hbd", acc[0].savings_hbd_balance);
  // console.log("hive", acc[0].savings_balance);
  return {
    hbd: parseFloat(acc[0].savings_hbd_balance as string),
    hive: parseFloat(acc[0].savings_balance as string),
  };
}
// const client = new Client("https://api.hive.blog");
// getSavingsBalance(client, "cryptosharon");
