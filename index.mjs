import db from './models/index.mjs';

// for finding items of 1 category
// db.Category.findOne({
//   where: {
//     name: [process.argv[2]],
//   },
// })
//   .then((category) => category.getItems())
//   .then((categoryItems) => {
//     categoryItems.forEach((categoryItem) => {
//       console.log(categoryItem.dataValues.name);
//     });
//   })
//   .catch((error) => console.log(error));

// ----------------------------------------------------------------------

// for finding categories of 1 item
db.Item.findOne({
  where: {
    name: [process.argv[2]],
  },
})
  .then((item) => item.getCategories())
  .then((itemCategories) => {
    itemCategories.forEach((itemCategory) => {
      console.log(itemCategory.dataValues.name);
    });
  })
  .catch((error) => console.log(error));
