const { Router } = require('express');
const router = Router();
const TestCliController = require('../controller/TestCliController');



router.get('/', (req, res) => res.json({message: "Server is running!..."})) //localhost:1000/mokupTest/api/v1

router.post ('/tpgc-etp-ope/create', TestCliController.gettpgcEtpOpeCreateController); //localhost:1000/mokupTest/api/v1tpgc-etp-ope/create/
router.post ('/tpgc-cli/update/habilitar/:rut', TestCliController.getTpgcCliUpdateHabilitarRut); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut

router.put ('/simulaciones/:idSimulacion/desbloquear', TestCliController.getSimulacionesIdSimulacionDesbloquear); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut
router.put ('/simulaciones/:idSimulacion/rechazo', TestCliController.getSimulacionesIdSimulacionRechazo); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut

router.get ('/clientes/:rut/tipo-documentos/:idTipoDocumento/mora', TestCliController.getGVEconsultaDatosCliente); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut

router.get ('/deudores/:rutDeudor/lineas', TestCliController.getGVEconsultaDatosDeudores); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut
router.get ('/tramo-mora', TestCliController.getTramoMora); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut
router.get ('/tramo-mora2', TestCliController.getTramoMora); //localhost:1000/mokupTest/api/v1/tpgc-cli/update/habilitar/rut



module.exports = router;