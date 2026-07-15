const Beneficio = require('../models/Beneficio')

exports.cadastrar = async(req,res) =>{
    try {
        const beneficio = await Beneficio.create({
            funcionarioId:req.body.funcionarioId,
            valeAlimentacao:700,
            valeTransporte:true,
            planoSaude:250
        })

        res.status(201).json(beneficio)
    } catch (error) {
        console.log(error)
    }
}

exports.listar = async()=>{
    try {
        const beneficios = await Beneficio.findAll()

        res.status(200).json(beneficios)
    } catch (error) {
        console.log(error)
    }
}