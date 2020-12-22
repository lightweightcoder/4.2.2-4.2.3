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

    const items = [];

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

    await queryInterface.bulkInsert('ItemsCategories', itemCategory);

    // create a single cart
    const carts = [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const cart = await queryInterface.bulkInsert('Carts', carts);

    const cartsItems = [];

    // put items in the cart
    cartsItems.push({
      ItemId: peach[0].id,
      quantity: 1,
      CartId: 1,
    });

    cartsItems.push({
      ItemId: peach[0].id,
      quantity: 4,
      CartId: 1,
    });

    await queryInterface.bulkInsert('CartsItems', cartsItems);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ItemsCategories', null, {});
    await queryInterface.bulkDelete('CartsItems', null, {});
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
