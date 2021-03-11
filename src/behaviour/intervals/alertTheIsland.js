export default function makeAlertIslandBH(alertDb) {

    async function alertIslandBH(client) {
        let ChannelToAlerts = await alertDb.getAll();
        for (let channel of ChannelToAlerts) {
            client.channels.cache.get(channel.ChannelId).send(channel.Message)
        }
    }

    async function alertIsland5MBH(client) {
        let ChannelToAlerts = await alertDb.getAll();
        for (let channel of ChannelToAlerts) {
            client.channels.cache.get(channel.ChannelId).send(`@everyone Faltan 5 minutos, la isla está que prende 🔥🔥🔥🔥`)
        }
    }

    return {alertIslandBH, alertIsland5MBH}

}