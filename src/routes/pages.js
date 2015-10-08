const _ = require('lodash'),
      data = require('../helpers/get-data');


module.exports = {

    home(req, res, next){
        const categories = data.fetchAllCategories(),
              products = data.fetchAllProducts();

        res.render('pages/home', {
            categories: categories,
            products: _.sample(products, 5)
        });
    }

};