// db is an argument to this function so
// that we can make db queries inside
export default function items(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        response.render('items/index', { items });
      })
      .catch((error) => console.log(error));
  };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
