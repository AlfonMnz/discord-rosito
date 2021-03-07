export default function makeAlertDebateBH(alertDb) {
    return async function alertDebate(client) {
        let ChannelToAlerts = await alertDb.getAll();
        for (let channel of ChannelToAlerts) {
            client.channels.cache.get(channel.ChannelId).send(`@everyone a las 22:00 empieza el debate.`);
        }
    }
}