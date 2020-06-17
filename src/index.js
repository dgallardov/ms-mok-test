const app = require('./app/app');
const db = require('./app/config/db/config');

require('dotenv').config()

async function main(){
    try {
        await app.listen(1000);

        const dbStatus = await db
        .authenticate()
        .then(() => {
            return 'Connection has been established successfully.';
        })
        let serverInfo = {
            "SERVICE": process.env.APP_NAME,
            "STATUS": "ok",
            "MSG" : "Server Init",
            "PORT" : process.env.PORT || 1000,
            "VERSION": process.env.VERSION_APP,
            "BASE_URL" : "/",
            "STATUS_DB" : dbStatus
        }
        console.log(serverInfo)
        console.table(serverInfo);
    } catch (error) {
        console.log(error)
        throw new Error("Internal Server Error");
    }
}

main();

