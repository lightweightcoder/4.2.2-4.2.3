module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const categoryData = [
      {
        name: 'fish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fruit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'healthy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'canned',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert categories
    const [
      fishCategory,
      fruitCategory,
      healthyCategory,
      cannedCategory,
    ] = await queryInterface.bulkInsert('Categories', categoryData, {
      returning: true,
    });

    // Define item data
    const itemData = [
      {
        name: 'banana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tuna',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'peach',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert items
    const [banana, tuna, peach] = await queryInterface.bulkInsert(
      'Items',
      itemData,
      { returning: true },
    );

    // Define item category data based on generated items and categories
    const itemCategoryData = [
      // banana is a fruit
      {
        ItemId: banana.id,
        CategoryId: fruitCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // banana is healthy
      {
        ItemId: banana.id,
        CategoryId: healthyCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // tuna is fish
      {
        ItemId: tuna.id,
        CategoryId: fishCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // tuna is canned
      {
        ItemId: tuna.id,
        CategoryId: cannedCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // peach is fruit
      {
        ItemId: peach.id,
        CategoryId: fruitCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // peach is canned
      {
        ItemId: peach.id,
        CategoryId: cannedCategory.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert item categories
    await queryInterface.bulkInsert('ItemsCategories', itemCategoryData);

    // Define cart data, 2 carts
    const cartData = [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Bulk insert carts
    const [cart1, cart2] = await queryInterface.bulkInsert('Carts', cartData, {
      returning: true,
    });

    // Define cart item data, i.e. put items in cart
    const cartsItemData = [
      {
        quantity: 1,
        ItemId: peach.id,
        CartId: cart1.id,
      },
      {
        quantity: 3,
        ItemId: peach.id,
        CartId: cart1.id,
      },
      {
        quantity: 2,
        ItemId: banana.id,
        CartId: cart1.id,
      },
      {
        quantity: 4,
        ItemId: peach.id,
        CartId: cart2.id,
      },
    ];

    // Bulk insert cart items
    await queryInterface.bulkInsert('CartsItems', cartsItemData);
  },

  down: async (queryInterface) => {
    // Delete rows from tables with foreign key references first
    await queryInterface.bulkDelete('ItemsCategories', null, {});
    await queryInterface.bulkDelete('CartsItems', null, {});
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
