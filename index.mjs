import db from './models/index.mjs';

// // get items in a category
// const getData = async () => {
//   try {
//     const category = await db.Category.findOne({
//       where: {
//         name: [process.argv[2]],
//       },
//     });

//     const categoryItems = await category.getItems();

//     console.log(categoryItems);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

// get category of an item
const getData = async () => {
  try {
    const item = await db.Item.findOne({
      where: {
        name: [process.argv[2]],
      },
    });

    const itemCategory = await item.getCategory();

    console.log(itemCategory);
  } catch (error) {
    console.log(error);
  }
};

getData();