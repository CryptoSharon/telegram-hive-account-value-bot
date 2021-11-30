import { Client, DynamicGlobalProperties } from "@hiveio/dhive";

//prettier-ignore
export async function hivePerMvest(client: Client): Promise<number> {
	const result: DynamicGlobalProperties = await client.database.call("get_dynamic_global_properties", []);
	const {
		total_vesting_fund_hive,
		total_vesting_shares,
	} = result as { total_vesting_fund_hive: string; total_vesting_shares: string };
	const hivePerMvest = (parseFloat(total_vesting_fund_hive) / (parseFloat(total_vesting_shares) / 1e6));
	return hivePerMvest
}
