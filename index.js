const app = require('./app/app');
require('dotenv').config()

async function main(){
    try {
        await app.listen(1000);
        let serverInfo = {
            "SERVICE": process.env.APP_NAME,
            "STATUS": "ok",
            "MSG" : "Server Init",
            "PORT" : process.env.PORT || 1000,
            "VERSION": process.env.VERSION_APP,
            "BASE_URL" : `/${process.env.APP_PATH_SERVICE}/api/${process.env.VERSION_APP}`
        }
        console.table(serverInfo);
    } catch (error) {
        console.log(error)
        throw new Error("Internal Server Error");
    }
}

main();

