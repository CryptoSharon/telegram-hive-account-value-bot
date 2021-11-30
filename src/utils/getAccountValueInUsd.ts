import { Client } from "@hiveio/dhive";
import { getAccountBalances } from "./getAccountBalances";
// import { hbdMedianPrice } from "./hdbMedianPrice";
import { getCoingeckoPrices } from "./getCoingeckoPrices";

export async function getAccountValueInUsd(
  client: Client,
  account: string
): Promise<number> {
  const balances = getAccountBalances(client, account);
  const prices = getCoingeckoPrices();
  // use Promise.all
  const [{ hbd, hp, hive }, { hive: hivePrice, hbd: hbdPrice }] =
    await Promise.all([balances, prices]);
  // const { hbd, hp, hive } = await getAccountBalances(client, account);
  // const { hive: hivePrice, hbd: hbdPrice } = await getCoingeckoPrices();
  const hbdValue = hbdPrice * hbd;
  const hiveValue = hivePrice * (hive + hp);
  return hbdValue + hiveValue;
}

// getAccountValueInUsd(new Client("https://api.hive.blog"), "cryptosharon").then(
//   (value) => {
//     console.log(value);
//   }
// );
