import db from './models/index.mjs';

db.Category
  .findOne({
    where: {
      name: process.argv[2]
    }
  })
  .then((returnedCategory) => {
    // Docs on .create
    // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create
    // Return statement returns the Promise returned by the final .then
    return db.Item.create(
      {
        name: process.argv[3],
      },
      {
        // Return only the id column
        returning: ['id']
      }
    ).then((newItem) => {
      // Associate newItem with returnedCategory using the setCategory
      // method on newItem that Sequelize provides for us because of the
      // belongsTo association we defined in models/index.mjs.
      // This logic because less clunky after we introduce async/await syntax.
      // Docs: https://sequelize.org/master/manual/assocs.html#-code-foo-belongsto-bar---code-
      console.log('new item is ', newItem.name);
      return newItem.setCategory(returnedCategory).then(() => {
        return newItem;
      });
    });
    
  }).then(result => {

    console.log('success!!');
    console.log('result is', result.name);

  }).catch(error => {

    console.log(error)
  });