import { Client } from "@hiveio/dhive";
import { getAccountHbd } from "./getAccountHbd";
import { getAccountHp } from "./getAccountHp";
import { getAccountHive } from "./getAccountHive";

export async function getAccountBalances(client: Client, account: string) {
  const hive = await getAccountHive(client, account);
  const hp = await getAccountHp(client, account);
  const hbd = await getAccountHbd(client, account);
  return {
    hive: hive,
    hp: hp,
    hbd: hbd,
  };
}
