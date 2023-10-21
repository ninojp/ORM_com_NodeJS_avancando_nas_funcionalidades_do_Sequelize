"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {foreignKey: "docente_id"});
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: {status: "confirmado"},
        as: "aulasMatriculadas"
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      // unique: { 
      //   true: true,
      //   name: "nome",
      //   msg: "Este Nome já está cadastrado!"
      // },
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error("O campo Nome deve ter mais de três caracteres!");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: {
        args: true,
        msg: "Dados do tipo e-mail Inválidos!"
      } }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Pessoas",
    paranoid: true,
    defaultScope: {
      where: {ativo: true}
    },
    scopes: {
      todos: {where: {}},
      //etc: {constraint: valor}
    }
  });
  return Pessoas;
};