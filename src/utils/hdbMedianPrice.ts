/*
    def hbd_median_price(self):
        """ Obtain the hbd price as derived from the median over all
            witness feeds. Return value will be HBD
        """
        return (Amount(self.hived.get_feed_history()['current_median_history']
                       ['base']).amount / Amount(self.hived.get_feed_history(
        )['current_median_history']['quote']).amount)
*/

import { Client } from "@hiveio/dhive";

/**
 * Simple promise call to get the value of 1 HIVE in HBD
 * @param client Initialized DHive Client
 * @returns Price of Hive in HBD
 */

export async function hbdMedianPrice(client: Client): Promise<number> {
  const feedHistory = await client.database.call("get_feed_history");
  const currentMedianHistory = feedHistory.current_median_history;
  const base = parseFloat(currentMedianHistory.base);
  const quote = parseFloat(currentMedianHistory.quote);
  return base / quote;
}

// hbdMedianPrice(new Client("https://api.hive.blog")).then((price) => {
//   console.log(price);
// });
