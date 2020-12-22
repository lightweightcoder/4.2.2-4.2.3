import db from './models/index.mjs';

db.Cart.findAll({
  include: {
    model: db.Item,
    include: [db.Category],
  },
})
  .then((carts) => {
    // console.log(carts[0]);
    console.log(carts[0].Items[0].CartsItem);
    console.log(carts[0].Items[0].Categories[0].name);
  })
  .catch((error) => console.log(error));
