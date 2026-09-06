'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
    { name: 'Qifrey', email: 'theteacher@gmark.com', createdAt: now, updatedAt: now },
    { name: 'Coco', email: 'chosenone@yahee.com', createdAt: now, updatedAt: now },
    { name: 'Mob', email: 'hyakupercento@gmark.com', createdAt: now, updatedAt: now },
    { name: 'Reigen', email: 'bestexorcist@yahee.com', createdAt: now, updatedAt: now },
  ]);

    const users = await queryInterface.sequelize.query(
    'SELECT id, name FROM "Users";',
    { type: Sequelize.QueryTypes.SELECT }
    );
    const idOf = (name) => users.find((u) => u.name === name).id;

      await queryInterface.bulkInsert('Tasks', [
  { title: 'Buy Coco a Pen', dueDate: new Date('2026-08-15'), completed: false, userId: idOf('Qifrey'), createdAt: now, updatedAt: now },
  { title: 'Fix Aggott Shoes', dueDate: new Date('2026-07-17'), completed: true, userId: idOf('Coco'), createdAt: now, updatedAt: now },
  { title: 'Track team meeting', dueDate: new Date('2026-08-04'), completed: false, userId: idOf('Mob'), createdAt: now, updatedAt: now },
  { title: 'Learn massage tricks', dueDate: new Date('2026-08-20'), completed: false, userId: idOf('Reigen'), createdAt: now, updatedAt: now },
]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tasks', null, {});
   await queryInterface.bulkDelete('Users', null, {});
  }
};