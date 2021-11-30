import { Client } from "@hiveio/dhive";
import { vestsToHp } from "./vestsToHp";

/**
 * Look up one or more accounts' HP from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HP for
 */
export async function getAccountsHp(
  client: Client,
  ...accounts: string[]
): Promise<number[]> {
  const vests = await client.database.getAccounts(accounts);
  const promiseArr = vests.map(({ vesting_shares }) =>
    vestsToHp(client, parseFloat(vesting_shares as string))
  );
  const hp = await Promise.all(promiseArr);
  return hp;
}

export function getAccountHp(client: Client, account: string): Promise<number> {
  return getAccountsHp(client, account).then((hp) => hp[0]);
}
