import db from './models/index.mjs';

db.Category
  .findOne({
    where: {
      name: process.argv[2]
    }
  })
  .then((returnedCategory) => {
    return db.Item.create(
      {
        name: process.argv[3],
        categoryId: returnedCategory.id
      },
      {
        returning: ['id']
      }
    )
  }).then(result => {

    console.log('success!!');
    console.log(result.id);

  }).catch(error => {

    console.log(error)
  });