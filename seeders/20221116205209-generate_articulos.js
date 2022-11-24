'use strict';
// INSERTA sequelize db:seed:all
// REVIERTE EL ULTIMO sequelize db:seed:undo
// REVIERTE TODO sequelize db:seed:undo:all

//EN ESTE SEEDER INSERTAMOS DATOS AL LA BASE DE DATOS
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('articulos', [
        {id:17,descripcion: 'CD Horizon Forbiden West PS4',articulo:'Horizon Forbiden West',precio:'RD$1,800.00',createdAt: new Date(),updatedAt: new Date()},
        {id:18,descripcion: 'CD Forza Horizon 5 Xbox',articulo:'Forza Horizon 5 ',precio:'RD$1,050.00',createdAt: new Date(),updatedAt: new Date()},
        {id:19,descripcion: 'Suscripcion GamePass 12 meses ',articulo:'Xbox GamePass',precio:'RD$2,505.00',createdAt: new Date(),updatedAt: new Date()},
        {id:20,descripcion: 'Driver Logitech PC PS4  ',articulo:'Driver Logitech',precio:'RD$19,000.00',createdAt: new Date(),updatedAt: new Date()}

      ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    
      await queryInterface.bulkDelete('articulos', null, {});
     
  }
};
