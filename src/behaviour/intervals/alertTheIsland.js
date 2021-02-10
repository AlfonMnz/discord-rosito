export default function makeAlertIslandBH(alertDb) {
	return async function alertIslandBH(client) {
		let ChannelToAlerts = await alertDb.getAll();
		for (let channel of ChannelToAlerts) {
			client.channels.cache.get(channel.ChannelId).send(channel.Message)
		}
	}
}