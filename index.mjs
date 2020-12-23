import db from './models/index.mjs';

db.Cart.findAll({
  include: {
    model: db.Item,
    include: [db.Category, db.CartsItem],
  },
})
  .then((carts) => {
    // console.log(carts[0]);
    // console.log(carts[0].Items);
    console.log(carts[0].Items[1].CartsItems.length);
    // console.log(carts[0].Items[1].CartsItems[0]);
    // console.log(carts[0].Items[0].CartsItem.quantity);
    // console.log(carts[0].Items[1].Categories[0].name);
    // console.log(carts[0].Items[1].Categories[1].name);
    // console.log(carts[0].Items[0].Categories[0].name);
  })
  .catch((error) => console.log(error));
