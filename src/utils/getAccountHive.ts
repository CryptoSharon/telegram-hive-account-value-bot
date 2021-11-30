import { Client } from "@hiveio/dhive";

/**
 * Look up one or more accounts' HIVE from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HIVE for
 */
export async function getAccountsHive(
  client: Client,
  ...accounts: string[]
): Promise<number[]> {
  const result = await client.database.getAccounts(accounts);
  return result.map((account) => parseFloat(account.balance as string));
}

export async function getAccountHive(
  client: Client,
  account: string
): Promise<number> {
  const balances = await getAccountsHive(client, account);
  return balances[0];
}
