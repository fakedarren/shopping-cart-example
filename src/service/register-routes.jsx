const api = require('../routes/api'),
      basket = require('../routes/basket'),
      pages = require('../routes/pages'),
      products = require('../routes/products');


module.exports = {

    register(app){
        app.get('/', pages.home);
        app.get('/api/category/:category_id', api.category);
        app.get('/api/product/:product_id', api.product_details);
        app.get('/basket', basket.list);
        app.get('/:category_id/:category_name', products.category);
        app.get('/:category_id/:category_name/:product_id/:product_name', products.details);
        app.post('/:category_id/:category_name/:product_id/:product_name', basket.add_to_basket, products.details);
    }

};