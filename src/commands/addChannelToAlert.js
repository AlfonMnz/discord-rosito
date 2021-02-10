export default function buildAddChannelToAlert(alertDb) {
	return async function addChannelToAlert(msg) {
		let existGuild = await alertDb.getByGuildId(msg.guild.id);
		if (existGuild) {
			existGuild.ChannelId = msg.channel.id
			return await existGuild.save();
		}
		return await alertDb.addAlert({ChannelId: msg.channel.id, GuildId: msg.guild.id});
	}

}