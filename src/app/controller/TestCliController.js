const http = require('../../core/http');
//const TpgcCli = require('../config/db/schemas/TpgcCli');
const AuthController = require('../controller/AuthController');
require('dotenv').config();

module.exports = {
    gettpgcEtpOpeCreateController: async (req, res) => {
        //console.log('entre2')
        try {
            if(req.headers['x-access-token']){
                const accessToken = req.headers['x-access-token'];
                const validate = await AuthController.validateToken(accessToken);
                if(validate.error){
                    throw new Error(validate.message);
                }

                console.log(req)
                const params = req.params;
                console.log(req.body)
                //Acepta - Rechaza
                res.status(200).json(http.ok("Acepta"));

            }else{
                throw new Error('No se encontró token de acceso');
            }
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },    
    getTpgcCliUpdateHabilitarRut: async (req, res) => {
        //console.log('entre2')
        try {
            if(req.headers['x-access-token']){
                const accessToken = req.headers['x-access-token'];
                const validate = await AuthController.validateToken(accessToken);
                if(validate.error){
                    throw new Error(validate.message);
                }

                //console.log(req.rut)
                const params = req.params.rut;
                console.log(params)
                //Acepta - Rechaza
                res.status(200).json(http.ok("Sin respuesta definida"));

            }else{
                throw new Error('No se encontró token de acceso');
            }
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    getSimulacionesIdSimulacionDesbloquear: async (req, res) => {
        //console.log('entre2')
        try {
            
            
            const respuesta = {
                "estado": "correcto"            
            }

            res.status(200).json(http.normal(respuesta));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    getSimulacionesIdSimulacionRechazo: async (req, res) => {
        //console.log('entre2')
        try {
            
            
            const respuesta = {
                "estado": "correcto"            
            }

            res.status(200).json(http.normal(respuesta));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    getGVEconsultaDatosCliente: async (req, res) => {
        //console.log('entre2')
        try {
            
            
            const respuesta = {

                "rut": "11111111-1",
                "comisionDocto": 20,
                "codigoMoneda": 3,
                "moneda": "UF",
                "porcAntic": 100,
                "diasCanje": 1,
                "moras": 
            
            [
            
                    {
                        "idTramoMora": 1,
                        "idTipoTasa": 7,
                        "tipoTasa": "Otra Tasa",
                        "valorTasa": 1
                    }
                ]
            
            }

            res.status(200).json(http.normal(respuesta));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    getGVEconsultaDatosDeudores: async (req, res) => {
        //console.log('entre2')
        try {
            
            
            const respuesta = {

                "rutDeudor": "2128801-5",
                "tasaPagador": 3,
                "montoSubLinea": 200
            
            }

            res.status(200).json(http.normal(respuesta));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    getTramoMora: async (req, res) => {
        //console.log('entre2')
        try {
            
            
            const respuesta = {
                "idTramoMora": 1,
                "desde": 1,
                "hasta": 15            
            }

            res.status(200).json(http.normal(respuesta));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    }                         
}