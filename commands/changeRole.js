module.exports = {
	name: 'chRoll',
	description: 'ping command',
	execute(message, args) {
		const roll = '744927078507348091';
		// get id of roll:
		// \@<rollName>
		// ony possible if 'Allow annyone to @mention this roll'
		if (message.member.roles.cache.has(roll)) {
			message.channel.send('nice');
			message.member.roles.remove(roll).catch(console.error);
		} else {
			message.channel.send('not');
			message.member.roles.add(roll).catch(console.error);
		}
	},
};
