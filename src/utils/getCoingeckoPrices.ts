import axios from "axios";

// get the price of Hive and HBD in USD
export async function getCoingeckoPrices(): Promise<{
  hbd: number;
  hive: number;
}> {
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=hive,hive_dollar&vs_currencies=usd"
  );
  const { hive_dollar, hive } = data;
  return { hbd: hive_dollar.usd, hive: hive.usd };
}

// getCoingeckoPrices().then((prices) => {
//   console.log(prices);
// });
