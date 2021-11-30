import { Bot } from "grammy";
import { botToken } from "./secrets.json";
// import { getAccountValuesAndBalances } from "./utils/getAccountValuesAndBalances";
import { getAccountBalances } from "./utils/getAccountBalances";
import { Client } from "@hiveio/dhive";
import { apiUrls } from "./config.json";
import { getCoingeckoPrices } from "./utils/getCoingeckoPrices";
import { getSavingsBalance } from "./utils/getSavingsBalance";

const bot = new Bot(botToken);
const client = new Client(apiUrls);

function validateUsername(username: string) {
  // regex source: https://peakd.com/programming/@cryptosharon/the-5-rules-of-a-valid-username-on-the-steem-blockchain-and-a-3-sbd-contest-to-make-an-account-name-validation-regex
  const regex =
    /^[a-z](-[a-z0-9](-[a-z0-9])*)?(-[a-z0-9]|[a-z0-9])*(?:\.[a-z](-[a-z0-9](-[a-z0-9])*)?(-[a-z0-9]|[a-z0-9])*)*$/;
  return regex.test(username);
}

// detect command /value <username>
bot.command(["value", "values"], async (ctx) => {
  console.log("command heard");
  const _username = ctx.message?.text.split(" ")[1];
  if (_username) {
    if (validateUsername(_username)) {
      // remove @ if it has it
      const username = _username.replace("@", "");
      const [
        { hbd, hive, hp },
        { hive: hivePrice, hbd: hbdPrice },
        { hbd: hbdSavings, hive: hiveSavings },
      ] = await Promise.all([
        getAccountBalances(client, username),
        getCoingeckoPrices(),
        getSavingsBalance(client, username),
      ]);
      const valueInUsd =
        hbdPrice * (hbd + hbdSavings) + hivePrice * (hive + hp + hiveSavings);
      /*
			All USD values must be strings with 2 decimal places.
			All HBD, HIVE and HP values must be strings with 3 decimal places.
			Produce this format as final output:
			Current prices: 
			Hive: $1.00
			HBD: $1.00

			[<username>](https://peakd.com/<username>)'s balances:
			*HBD*: <value>
			*HBD savings*: <value>
			*HP*: <value>
			*HIVE*: <value>
			*HIVE savings*: <value>

			Median value in USD: <value>
			Current value in HBD: <value>
		*/
      const message = `<strong>Current prices:</strong>
<strong>HIVE:</strong> <code>$${hivePrice.toFixed(2)}</code>
<strong>HBD:</strong> <code>$${hbdPrice.toFixed(2)}</code>
		
<strong><a href="https://peakd.com/${username}">@${username}</a>'s balances:</strong>
<strong>HBD:</strong> <code>${hbd.toFixed(3)}</code>
<strong>HBD savings:</strong> <code>${hbdSavings.toFixed(3)}</code>
<strong>HP:</strong> <code>${hp.toFixed(3)}</code>
<strong>HIVE:</strong> <code>${hive.toFixed(3)}</code>

<strong>Current value in USD:</strong> <code>$${valueInUsd.toFixed(2)}</code>`;
      ctx.reply(message, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
      });
    } else {
      ctx.reply("Invalid username. Please use a valid username.");
    }
  } else {
    ctx.reply("Please provide a username. Correct format: /value <username>");
  }
});

bot.start();

export {};
console.log("bot started");
