const express = require("express")

const router = express.Router()

const beneficioController = require("../controller/BeneficioController")

router.post("/beneficios", beneficioController.cadastrar)
router.get("/beneficios", beneficioController.listar)

module.exports = router