//Importing Handlers
import makeAlertDb from "./handlers/alert.db";

//Importing models
import AlertModel from './models/Alerts';

//Importing packages

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/rosito', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}).then(() => console.log('DATABASE STATUS [OK]'))
	.catch((err) => console.log(err));

const alertDb = makeAlertDb(AlertModel);
export {
	alertDb
}