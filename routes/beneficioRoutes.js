const express = require("express")

const router = express.Router()

const beneficioController = require("../controller/BeneficioController")

router.post("/beneficio", beneficioController.cadastrar)
router.get("/beneficio", beneficioController.listar)

module.exports = router