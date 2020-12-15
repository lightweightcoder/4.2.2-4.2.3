import db from './models/index.mjs';

db.Category.findOne({
  where: {
    name: [process.argv[2]]
  }
})
.then((category) => category.getItems())
.then((categoryItems) => console.log( categoryItems ))
.catch((error) => console.log(error));