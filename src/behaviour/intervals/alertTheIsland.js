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
    async function alertIslandEspecial(client) {
        let ChannelToAlerts = await alertDb.getAll();
        for (let channel of ChannelToAlerts) {
            client.channels.cache.get(channel.ChannelId).send(`@everyone LA ISLA AHORA TAMBIEN EN MIERCOLES (nunca desconfieis de Rosito)`)
        }
    }

    return {alertIslandBH, alertIsland5MBH, alertIslandEspecial}

}