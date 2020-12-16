'use strict';

module.exports = {
  up: async (queryInterface) => {

    const categoriesList = [
      {
        name: 'fish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fruits',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'meat',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insert categories before items because items reference categories 
    let categories = await queryInterface.bulkInsert("Categories", categoriesList, { returning: true });

    const items = [];
    for( let i=0;i<categories.length; i++){

      const category = categories[i];

      items.push({
        name: 'some item',
        CategoryId:category.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      items.push({
        name: 'other item',
        CategoryId:category.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      items.push({
        name: 'iitemmm',
        CategoryId:category.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    queryInterface.bulkInsert("Items", items);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Items", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
};