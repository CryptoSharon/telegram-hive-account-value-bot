# telegram-hive-account-value-bot
A Telegram bot that calculates the basic value of an account (doesn't take into account sidechain tokens or splinterlands cards)

## Getting Started

**Requirement**: Nodejs

**Optional**: Yarn, PM2

### Installing Nodejs

- I followed instructions [here](https://github.com/tj/n)

### Installing yarn and pm2 with NPM

`npm i -g yarn pm2`

### Install dependencies:

`yarn`

or

`npm install`

### Add the token

```bash
cd src
vim secrets.json
```

change "[YOUR TOKEN](https://github.com/CryptoSharon/telegram-hive-account-value-bot/blob/master/src/secrets.json)" for your bot token gotten from [@BotFather](https://t.me/Botfather)

### Run the bot

`node src`

### Daemonize the bot with pm2

```bash
pm2 start src --name YourBotsName
pm2 startup
```

## Live Bot

[@HiveToolkitBot](https://t.me/HiveToolkitBot)

### The only command available right now is

`/value accountname`
