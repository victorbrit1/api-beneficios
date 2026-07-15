const { DataTypes} = require("sequelize")
const sequelize = require("../config/database")

const Beneficio = sequelize.define("Beneficio",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },
    funcionarioId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    valeAlimentacao:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    valeTransporte:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    planoSaude:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    }
})
