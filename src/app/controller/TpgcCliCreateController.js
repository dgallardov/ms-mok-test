const http = require('../../core/http');
const TpgcCli = require('../config/db/schemas/TpgcCliCreate');
const AuthController = require('../controller/AuthController');
require('dotenv').config();

module.exports = {

    getTpgcCli: async (req, res) => {
        try {
            if(req.headers['x-access-token']){
                const accessToken = req.headers['x-access-token'];
                const validate = await AuthController.validateToken(accessToken);
                if(validate.error){
                    throw new Error(validate.message);
                }
                const params = req.params;
                const tpgcCli = await TpgcCli.getTpgcCli(req.body);                
                if(tpgcCli.error){
                    throw new Error(tpgcCli.message)
                }
                res.status(200).json(http.ok(tpgcCli));
            }else{
                throw new Error('No se encontró token de acceso');
            }
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    }
}