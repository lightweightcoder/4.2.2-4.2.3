module.exports = {
  up: async (queryInterface) => {
    const fishCategory = await queryInterface.bulkInsert(
      'Categories',
      [{
        name: 'fish',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const fruitCategory = await queryInterface.bulkInsert(
      'Categories',
      [{
        name: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const healthyCategory = await queryInterface.bulkInsert(
      'Categories',
      [{
        name: 'healthy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const cannedCategory = await queryInterface.bulkInsert(
      'Categories',
      [{
        name: 'canned',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true },
    );

    const banana = await queryInterface.bulkInsert('Items',
      [{
        name: 'banana',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true });
    const tuna = await queryInterface.bulkInsert('Items',
      [{
        name: 'tuna',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true });
    const peach = await queryInterface.bulkInsert('Items',
      [{
        name: 'peach',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      { returning: true });

    const itemCategory = [];

    console.log(banana);

    // banana is a fruit
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: banana[0].id,
      CategoryId: fruitCategory[0].id,
    });

    // banana is healthy
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: banana[0].id,
      CategoryId: healthyCategory[0].id,
    });

    // tuna is fish
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: tuna[0].id,
      CategoryId: fishCategory[0].id,
    });

    // tuna is canned
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: tuna[0].id,
      CategoryId: cannedCategory[0].id,
    });

    // peach is fruit
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: peach[0].id,
      CategoryId: fruitCategory[0].id,
    });

    // peach is canned
    itemCategory.push({
      createdAt: new Date(),
      updatedAt: new Date(),
      ItemId: peach[0].id,
      CategoryId: cannedCategory[0].id,
    });

    queryInterface.bulkInsert('ItemsCategories', itemCategory);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
