import { Client } from "@hiveio/dhive";
import config from "../../config.json";
import { vestsToHp } from "../vestsToHp";

async function main() {
  // get hive user "cryptosharon" vests balance
  const client = new Client(config.apiUrls);
  const user = "cryptosharon";
  const vests = await client.database.getAccounts([user]);
  const vestsBalance = vests[0].vesting_shares;

  // convert vests to hp
  const hp = await vestsToHp(client, parseFloat(vestsBalance as string));

  // log
  console.log(`${user} hp: ${hp}`);
}

main();
