import { getAccountBalances } from "./getAccountBalances";
import { getAccountValueInUsd } from "./getAccountValueInUsd";
import { getAccountValueInHbd } from "./getAccountValueInHbd";
import { Client } from "@hiveio/dhive";

export async function getAccountValuesAndBalances(
  client: Client,
  account: string
) {
  const functions = [
    getAccountBalances,
    getAccountValueInUsd,
    getAccountValueInHbd,
  ];
  const values = await Promise.all([
    getAccountBalances(client, account),
    getAccountValueInUsd(client, account),
    getAccountValueInHbd(client, account),
  ]);
  return {
    balances: values[0],
    valueInUsd: values[1],
    valueInHbd: values[2],
  };
}

// getAccountValuesAndBalances(new Client("https://api.hive.blog"), "cryptosharon").then(
//   console.log
// );
