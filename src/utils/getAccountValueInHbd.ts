import { Client } from "@hiveio/dhive";
import { getAccountBalances } from "./getAccountBalances";
import { hbdMedianPrice } from "./hdbMedianPrice";

export async function getAccountValueInHbd(
  client: Client,
  account: string
): Promise<number> {
  const balances = getAccountBalances(client, account);
  const _hbdPrice = hbdMedianPrice(client);
  // const { hbd, hp, hive } = balances;
  // use Promise.all
  const [{ hbd, hp, hive }, hbdPrice] = await Promise.all([
    balances,
    _hbdPrice,
  ]);
  const hbdValueOfHive = hbd + hbdPrice * (hive + hp);
  return hbdValueOfHive;
}

// getAccountValueInHbd(new Client("https://api.hive.blog"), "cryptosharon").then(
//   (value) => {
//     console.log(value);
//   }
// );
