const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ayarlar = require("./config.json");
const işaret = require('./config.json');
var prefix = işaret.prefix
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.login("MTEzNDQxMDc4MDgzODczMTgwNw.GvLZID.Cu3j7TTq7SRuPaI10c1NUOTgZWjIVMv337aTm8")


// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
// .env gözükmüyor ise sağ üstten remix to edit tuşuna bas!
