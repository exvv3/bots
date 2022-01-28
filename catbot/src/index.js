const { Client, Intents } = require("discord.js");

const cb = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

cb.on("ready", () => {
  console.log("Catbot is online");
});

cb.login(process.env.CB_TOKEN);
