import { Client, Intents } from "discord.js";
import fetch from "node-fetch";

const client = new Client({ 
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
	console.log("Bot is ready!");
})

const url = "https://api.guthub.com/repos/";

client.on("messageCreate", async (message) => {
	const regex = /https?:\/\/github.com\/([\d\w-\.]+\/[\d\w-\.]+)/;
	const matches = message.content.match(regex);
	if (matches !== null) {
		const repo = await fetch(url + matches[1]).then(b => b.json()).catch(err => console.log(err));
		console.log(repo);
		if (repo.license === null) {
			message.reply("You don't have a license!");
		}
	}
})

client.login("ODkzMjYzODgwMTQxMjg3NDU0.YVY60Q.86Gy0NL56Hw9qsdoCUhzPN5b0qg");

