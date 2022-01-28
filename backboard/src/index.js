const { Client, Intents } = require("discord.js");

const board = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

board.on("ready", () => {
  console.log("Backboard is online");
});

board.login(process.env.BD_TOKEN);
