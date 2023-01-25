'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      from: {
        type: Sequelize.STRING
      },
      dest: {
        type: Sequelize.STRING
      },
      date_air: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      no_chair: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER
      },
      trip_type: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      logo: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '/ticket/ticket_default.jpg'
      },
      flight_number: {
        type: Sequelize.STRING,
      },
      kelas: {
        type: Sequelize.INTEGER,
      },
      estimated_up_dest: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};