'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      { name: 'Admin User', email: 'dummyadmin@gmail.com', password: await bcrypt.hash('admin123', 10), role: 'admin', createdAt: now, updatedAt: now },
      { name: 'Regular User', email: 'dummyuser@gmail.com', password: await bcrypt.hash('user123', 10), role: 'member', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

//for demoing the hashing