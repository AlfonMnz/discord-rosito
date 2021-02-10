import makeAlertIslandBH from "./alertTheIsland";
import {alertDb} from "../../db";

const alertIslandBH = makeAlertIslandBH(alertDb);

function runIntervals(client) {
	setInterval(async () => {
		let date = new Date();
		if (date.getDay() === 4 && date.getHours() === 21 && date.getMinutes() === 30) {
			await alertIslandBH(client)
		}
	}, 60000)
}

export default runIntervals