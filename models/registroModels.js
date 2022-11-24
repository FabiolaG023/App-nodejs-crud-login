'use strict';
const bcrypt = require('bcrypt');
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  const Registro = sequelize.define('Registro', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {});

  Registro.login = function(email,password){
    // Buscar al usuario
    return Registro.findOne({
      where: {
        email: email
      }
    }).then(user=>{
      if(!user){ return console.log('ESTE USUARIO NO EXISTE')};
      return user.authenticatePassword(password).then(valid=> valid ? user : null);
    });
  };
    // autentifica el usuario
  Registro.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        if(err) return rej(err);
        res(valid);
        console.log("---SECCION INICIADA!---")
      })
    })
  }

  Registro.associate = function(models) {
    // associations can be defined here
     //un usuario puede tener muchos articulos
    Registro.hasMany(models.Articulo,{
      as: 'artitulo',foreignKey:'userId'
     }); 
  };
  //crea el hash
  Registro.beforeCreate(function(user,options){
    return new Promise((res,rej)=>{
      if(user.password){
        bcrypt.hash(user.password, 10, function(error,hash){
          user.password_hash = hash;
          res();
        })
      };
    });
  });
  return Registro;
};