# telegram-hive-account-value-bot
A Telegram bot that calculates the basic value of an account (doesn't take into account sidechain tokens or splinterlands cards)

## Getting Started

### Install dependencies:

`yarn`

or

`npm install`

### Add the token

`cd src`
`vim secrets.json`

change "YOUR_TOKEN" for your bot token gotten from [@BotFather](https://t.me/Botfather)

### Run the bot

`node src`

### Daemonize the bot with pm2

`pm2 start src --name YourBotsName`

## Live Bot

[@HiveToolkitBot](https://t.me/HiveToolkitBot)

### The only command available right now is

`/value accountname`
