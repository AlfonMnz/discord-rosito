import makeAddChannelToAlert from "./addChannelToAlert";

import {alertDb} from "../db";

const addChannelToAlert = makeAddChannelToAlert(alertDb);

function runCommands(client) {
	client.on('message', async (msg) => {
		if (msg.content.startsWith('!aviso')) {
			console.log(msg.content);
			await addChannelToAlert(msg);
		}
	})
}

export default runCommands;