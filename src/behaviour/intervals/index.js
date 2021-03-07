import makeAlertIslandBH from "./alertTheIsland";
import makeAlertDebateBH from "./alertTheDebate";

import {alertDb} from "../../db";

const alertIslandBH = makeAlertIslandBH(alertDb);
const alertDebateBH = makeAlertDebateBH(alertDb);

function runIntervals(client) {
	setInterval(async () => {
		let date = new Date();
		if (date.getDay() === 4 && date.getHours() === 21 && date.getMinutes() === 30) {
			await alertIslandBH(client)
		}
		if (date.getDay() === 1 && date.getHours() === 21 && date.getMinutes() === 30) {
			await alertDebateBH(client)
		}
	}, 60000)
}

export default runIntervals