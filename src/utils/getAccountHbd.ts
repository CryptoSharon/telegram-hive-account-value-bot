import { Client } from "@hiveio/dhive";

/**
 * Look up one or more accounts' HBD from their vest balance
 * @param client Initialized DHive Client
 * @param {...string} accounts Accounts to look HBD for
 */
export async function getAccountsHbd(
  client: Client,
  ...accounts: string[]
): Promise<number[]> {
  const result = await client.database.getAccounts(accounts);
  accounts[0];
  return result.map((account) => parseFloat(account.hbd_balance as string));
}

export async function getAccountHbd(
  client: Client,
  account: string
): Promise<number> {
  const balances = await getAccountsHbd(client, account);
  return balances[0];
}
