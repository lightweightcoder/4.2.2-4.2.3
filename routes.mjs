import db from './models/index.mjs';
import items from './controllers/items.mjs'

export default function routes( app ){

  // pass in the db for all items callbacks
  const ItemsController = items(db);

  app.get('/items', ItemsController.index);
}