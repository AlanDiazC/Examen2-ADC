const express = require("express");
const controller = require("../controllers/interesesControllers.js");
router = express.Router();

router.get("/obtenerLugaresInteres", controller.getLugares);

router.post("/postLugaresInteres", controller.postLugares);

router.post("/modificarLugaresInteres", controller.modificarLugares);

// router.post("/borrarLugaresInteres", controller.borrarLugares);

module.exports = router;
