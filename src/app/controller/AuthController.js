const jwt = require('jsonwebtoken')
const http = require('../../core/http')
const fetch = require('node-fetch');
require('dotenv').config();

const uriAccessToken = process.env.URI_ACCESS;
const apiKey = process.env.API_KEY;

module.exports = {
    getAccessToken: async (req, res) => {
        try {
            const body = {
                    apiKey
                    }

                    console.log(JSON.stringify(body))
            const accesToken = await fetch(uriAccessToken, {
                method: 'post',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => {
                console.log(res)
                return res.json()
            });
            res.status(200).json(http.ok(accesToken.data));
        } catch (error) {
            res.status(500).json(http.error(error))
        }
    },
    validateToken: async (token) => {
        try {
            // decode token
            if (token) {
                // verifies secret and checks exp
                jwt.verify(token, process.env.SECRET_TOKEN, await function(err, decoded) {
                    if(err){
                        response = {
                            error: true,
                            message: (err.name === 'TokenExpiredError') ? 'El token a expirado' : err.message
                        }
                        return response;
                    }else{
                        response = {
                            "info": decoded,
                            message: 'Petición exitosa'
                        }
                    }
                });
                return response;
            } else {
                // if there is no token
                // return an error
                return {
                    error: true,
                    message: "Acceso denegado."
                };
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }
}