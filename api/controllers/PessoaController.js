"use strict";
// const database = require("../models");
// const Sequelize = require("sequelize");
const { PessoasServices } =require("../services");
const pessoasServices = new PessoasServices();

class PessoaController{
  static async pegaPessoasAtivas(req, res) {
    try{
      const PessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
      return res.status(200).json(PessoasAtivas);
    }catch(error){
      return res.status(500).json(error.message);
    } 
  }
  //----------------------------------------------------------------------------------------
  static async pegaTodasAsPessoas(req, res) {
    try{
      const todasAsPessoas = await pessoasServices.pegaTodosRegistros();
      return res.status(200).json(todasAsPessoas);
    }catch(error){
      return res.status(500).json(error.message);
    } 
  }
  //----------------------------------------------------------------------------------------
  static async pegaUmaPessoa(req, res){
    const { id } = req.params;
    try{
      const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}});
      return res.status(200).json(umaPessoa);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async criaPessoa(req, res){
    const novaPessoa = req.body;
    try{
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async atualizaPessoa(req, res){
    const {id} = req.params;
    const novaInfos = req.body;
    try{
      await database.Pessoas.update(novaInfos, {where: {id: Number(id)}});
      const pessoaAtualizada =  await database.Pessoas.findOne({where: {id: Number(id)}});
      return res.status(200).json(pessoaAtualizada);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async apagaPessoa(req, res){
    const {id} = req.params;
    try{
      await database.Pessoas.destroy({where: {id: Number(id)}});
      return res.status(200).json({mensagem: `A Pessoa do ID: ${id}, foi Deletada!`});
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //=========================================================================================
  static async restauraPessoa(req, res){
    const {id} = req.params;
    try{
      await database.Pessoas.restore({where: {id: Number(id)}});
      return res.status(200).json({mensagem: `A Pessoa do ID: ${id}, foi Restaurada!`});
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //=========================================================================================
  static async pegaUmaMatricula(req, res){
    const { estudanteId, matriculaId } = req.params;
    try{
      const umaMatricula = await database.Matriculas.findOne({where: {
        id: Number(matriculaId),
        estudante_id: Number(estudanteId)
      }});
      return res.status(200).json(umaMatricula);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async criaMatricula(req, res){
    const { estudanteId } = req.params;
    const novaMatricula = {...req.body, estudante_id: Number(estudanteId)};
    try{
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.status(200).json(novaMatriculaCriada);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async atualizaMatricula(req, res){
    const { estudanteId, matriculaId } = req.params;
    const novaInfos = req.body;
    try{
      await database.Matriculas.update(novaInfos, {where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}});
      const MatriculaAtualizada =  await database.Matriculas.findOne({where: {id: Number(matriculaId)}});
      return res.status(200).json(MatriculaAtualizada);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async apagaMatricula(req, res){
    const { matriculaId } = req.params;
    try{
      await database.Matriculas.destroy({where: {id: Number(matriculaId)}});
      return res.status(200).json({mensagem: `A Matricula de ID: ${matriculaId}, foi deletada`});
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async restauraMatricula(req, res){
    const { estudanteId, matriculaId } = req.params;
    try{
      await database.Matriculas.restore({where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}});
      return res.status(200).json({mensagem: `A Matricula de ID: ${matriculaId}, foi Restaurada!`});
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async pegaMatriculas(req, res){
    const { estudanteId } = req.params;
    try{
      const idPessoa = await database.Pessoas.findOne({where: {id: Number(estudanteId)}});
      const matriculasConfirmadas = await idPessoa.getAulasMatriculadas();
      return res.status(200).json(matriculasConfirmadas);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async pegaMatriculasPorTurma(req, res){
    const { turmaId } = req.params;
    try{
      const todasAsMatriculas = await database.Matriculas.findAndCountAll({
        where: { 
          turma_id: Number(turmaId),
          status: "confirmado"
        },
        limit: 2,//Limite de resultados por busca
        order: [["estudante_id", "DESC"]]//Ordem dos resultados ASC(ascendente) DESC(descendente)
      });
      return res.status(200).json(todasAsMatriculas);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async pegaTurmasLotadas(req, res){
    const lotacaoTurma = 2;
    try{
      const turmasLotadas = await database.Matriculas.findAndCountAll({
        where: { status: "confirmado" },
        attributes: ["turma_id"],
        group: ["turma_id"],
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
      });
      return res.status(200).json(turmasLotadas.count);
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
  //----------------------------------------------------------------------------------------
  static async cancelaPessoa(req, res){
    const { estudanteId } = req.params;
    try{
      database.sequelize.transaction(async transacao => {
        await database.Pessoas.update({ativo: false},
          {where: {id: Number(estudanteId)}},
          {transaction: transacao});
        await database.Matriculas.update({status: "cancelado"},
          {where: {estudante_id: Number(estudanteId)}},
          {transaction: transacao});
        return res.status(200).json({ message: `Matriculas ref. estudante ID: ${estudanteId} Canceladas!`});

      });
    }catch(error){
      return res.status(500).json(error.message);
    }
  }
}
module.exports = PessoaController;