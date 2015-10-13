const _ = require('lodash'),
      Basket = require('../views/components/Basket'),
      data = require('../helpers/get-data'),
      HomeProductList = require('../views/components/HomeProductList'),
      React = require('react');


module.exports = {

    home(req, res, next){
        const categories = data.fetchAllCategories(),
              products = data.fetchAllProducts();

        const html_basket = React.renderToString(<Basket content_list={req.session.basket} />),
              html_home_product_list = React.renderToString(<HomeProductList home_product_list={_.sample(products, 5)} />);

        res.render('pages/home', {
            categories: categories,
            html_basket: html_basket,
            html_home_product_list: html_home_product_list
        });
    }

};