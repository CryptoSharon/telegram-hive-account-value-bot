import { Client } from "@hiveio/dhive";
import { hivePerMvest } from "./hivePerMvests";

export async function vestsToHp(
  client: Client,
  vests: number
): Promise<number> {
  const hpm = await hivePerMvest(client);
  return (vests / 1e6) * hpm;
}
