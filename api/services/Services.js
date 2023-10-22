"use strict";
const database = require("../models");

class Services{
  constructor(nomeDoModelo){
    this.nomeDoModelo = nomeDoModelo;
  }
  //---------------------------------------------------------------------------------
  async pegaTodosRegistros(){
    return database[this.nomeDoModelo].findAll();
  }
  //---------------------------------------------------------------------------------
  async pegaUmRegistro(id){

  }
  //---------------------------------------------------------------------------------
  async criaRegistro(dados){

  }
  //---------------------------------------------------------------------------------
  async atualizaRegistro(dadosAtualizados, id, transacao={}){
    return database[this.nomeDoModelo].update(dadosAtualizados, {where: {id: id}}, transacao);
  }
  //---------------------------------------------------------------------------------
  async apagaRegistro(id){

  }
}

module.exports = Services;