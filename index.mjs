import { Client, Intents } from "discord.js";
import fetch from "node-fetch";

const client = new Client({ 
	intents: [Intents.FLAGS.GUILDS, Intents.FLAG.GUILD_MESSAGES],
});

client.once("ready", () => {
	console.log("Bot is ready!");
})

client.on("messageCreate", async (message) => {
	const regex = /https?:\/\/github.com\/([\d\w-\.]+\/[\d\w-\.]+)/;
	const matches = message.content.match(regex);
	if (matches !== null) {
		const repo = await fetch("https://api.guthub.com/repos/" + matches[1]).then()
		console.log(repo);
		if (repo.license === null) {
			message.reply("You don't have a license!");
		}
	}
})

client.login("1c799aaa762136f446df2717e4ce6796607d0730882bae955a46cbeca0302082");

