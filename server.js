const express = require("express")

const app = require("./app")

const sequelize = require("./config/database")

const PORT = 3001

app.listen(PORT, () =>{
    console.log("Microserviço rodando na porta 3001")
})