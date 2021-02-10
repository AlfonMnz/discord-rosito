import makeAlertIslandBH from "./alertTheIsland";
import {alertDb} from "../../db";

const alertIslandBH = makeAlertIslandBH(alertDb);

function runIntervals(client) {
	setInterval(async () => {
		let date = new Date();
		if (date.getDay() === 3 && date.getHours() === 20 && date.getMinutes() === 21) {
			await alertIslandBH(client)
		}
	}, 60000)
}

export default runIntervals