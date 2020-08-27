module.export = {
	name: "ping",
	description: "png command",
	execute(message, args) {
		message.channel.send("pong");
	},
};
