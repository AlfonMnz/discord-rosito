export default function makeAlertDb(alertModel) {
	async function addAlert(alertData) {
		try {
			let newAlertDb = await new alertModel(alertData);
			return await newAlertDb.save();
		} catch (e) {
			throw e;
		}
	}

	async function getAll() {
		try {
			return await alertModel.find();
		} catch (e) {
			throw e;
		}
	}

	async function getByGuildId(guildId) {
		try {
			return await alertModel.findOne({GuildId: guildId});
		} catch (e) {
			throw e;
		}
	}

	return {
		addAlert,
		getAll,
		getByGuildId,
	}
}