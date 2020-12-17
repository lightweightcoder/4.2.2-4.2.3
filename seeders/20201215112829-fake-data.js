module.exports = {
  up: async (queryInterface) => {

    const itemsList = [
      {
        name: 'doritos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mangoes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pork shoulder',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    queryInterface.bulkInsert("Items", itemsList);

  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Items", null, {});
  },
};