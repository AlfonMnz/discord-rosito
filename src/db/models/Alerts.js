const mongoose = require('mongoose');
const schema = mongoose.Schema;
const alertSchema = new schema({
	ChannelId: {
		type: String
	},
	Message: {
		type: String,
		default: "@everyone La Isla De Las Tentaciones comienza en 30 minutos #PrayForRosito"
	},
	GuildId: {
		type: String,
	}
});

export default mongoose.model('alert', alertSchema);
