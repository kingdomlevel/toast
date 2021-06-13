require('dotenv').config();
const mongoose = require('mongoose');
const connection = {};

async function connectDb() {
    if(connection.isConnected){
        console.log("using existing connection.")
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_SRV, {
        uri: '',
        useCreateIndex: true, 
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Database Connected 🚀')
    connection.isConnected = db.connections[0].readyState;
}
 

module.exports = connectDb;
// export default connectDb;

