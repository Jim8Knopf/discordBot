const Discord = require("discord.js");

const fs = require("fs");

const conf = require("./config.json");
const client = new Discord.Client();
const prefix = "-";

client.commands = new Discord.Collection();

// says me when the bot online is
client.once("ready", () => {
	console.log("Ready!");
});

const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("message", (message) => {
	// reactions to bot messages
	if (message.author.bot && message.embeds.find((msg) => msg.title === "test")) {
		// const embedTitle = message.embeds.embedTitle;
		console.log("test works");
		message.react("😄");
	}
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	// reaction to users
	if (command === "ping") {
		client.commands.get("ping").execute(message, args);
	} else if (command === "test") {
		client.commands.get("chRoll").execute(message, args);
	} else if (command === "ck") {
		const embed = new Discord.MessageEmbed();
		client.commands.get("ck").execute(message, args, embed);
	}
});

client.on("messageReactionAdd", (reaction, user) => {
	if (user.bot) return;
	if (reaction.message.channel.id !== chanel.id) return;
	const { guild } = reaction.message;
	const roll = guild.roles.cache.find((role) => role.name === "CK Kämpfer");
	const member = guild.members.cache.find((member) => member.id === user.id);
	member.roles.add(roll).catch(console.error);
});

client.login(conf.dcToke);
