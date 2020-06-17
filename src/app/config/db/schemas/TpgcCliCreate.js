const Sequelize = require('sequelize');
const db = require('../config');

module.exports = {
    /**
     * Función que se encarga de obtener los valores de un cliente 
     * en base al número de documento.
     * Recibe un parámetro de entrada @cli_num_doc
     */
    
    getTpgcCli: async (body) => {

            
        console.log(body.tipodoc)
        console.log(body.rut)
        console.log(body.identificacion)
        console.log(body.personaEmpresa)
        console.log(body.paisCodigo)
        console.log(body.idCliCore)
       
        try {
            /**
             * Llamamos el SP encargado de obtener los datos del cliente
             * Recibe dos parámetros @cli_num_doc y @cli_tip_doc siendo este
             * último una variable fija de Valor RUT
             */
            const tpgcCli = await db.query(`EXEC dbo.spr_cli @cli_num_doc = N'${cli_num_doc}', @cli_tip_doc = N'${cli_tip_doc}'`, 
            { type: Sequelize.QueryTypes.SELECT });
            
            return tpgcCli[0];
            
        } catch (error) {
            return {
                error: true,
                message: "TERMINADO!! Este error no debe aparecer porque FALTA CONSULTAR SP que debo apuntar en el llamdo anterior| schema/TpgcCliCreate.js"
            };
        }
    }
}