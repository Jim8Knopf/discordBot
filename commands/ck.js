
module.exports = {
	name: "ck",
	description: "ping command",
	execute(message, args, embed) {
		const roll = '744927078507348091';
		// get id of roll:
		// \@<rollName>
		// ony possible if 'Allow annyone to @mention this roll'

		embed.setTitle('test');
		embed.setColor("Green");
		embed.setDescription("test");
		embed.setTimestamp();
		message.channel.send(embed);
		
	},
};
