import makeAddChannelToAlert from "./addChannelToAlert";
import makeSayYourCreator from "./sayYourCreator";
import {alertDb} from "../db";

const addChannelToAlert = makeAddChannelToAlert(alertDb);
const sayYourCreator = makeSayYourCreator();
function runCommands(client) {
	client.on('message', async (msg) => {
		if (msg.content.startsWith('!aviso')) {
			await addChannelToAlert(msg);
			msg.channel.send('Se ha configurado este canal para avisar de la isla de las tentaciones');
		}
		if (msg.content.startsWith('!creador')) {
			await sayYourCreator(msg);
		}
	})
}

export default runCommands;