import makeAddChannelToAlert from "./addChannelToAlert";

import {alertDb} from "../db";

const addChannelToAlert = makeAddChannelToAlert(alertDb);

function runCommands(client) {
	client.on('message', async (msg) => {
		if (msg.content.startsWith('!aviso')) {
			await addChannelToAlert(msg);
			msg.channel.send('Se ha configurado este canal para avisar de la isla de las tentaciones');
		}
	})
}

export default runCommands;