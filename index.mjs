import { Client, Intents } from "discord.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAG.GUILD_MESSAGES], });

client.once("ready", () => {
	console.log("Bot is ready!")
});

