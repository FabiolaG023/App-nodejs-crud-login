'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Articulo  = sequelize.define('Articulo',{
    descripcion: DataTypes.STRING,
    articulo: DataTypes.STRING,
    precio: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Articulo.associate = function(models) {
    // associations can be defined here
    //un articulo le pertenese a un registro
    Articulo.belongsTo(models.Registro,{
     as: 'registro',
     foreignKey: 'userId'
   });  
 };
  
  return Articulo;
};