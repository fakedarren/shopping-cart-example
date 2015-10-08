const data = require('../helpers/get-data'),
      ProductDetails = require('../views/components/ProductDetails'),
      ProductList = require('../views/components/ProductList'),
      React = require('react');


module.exports = {

    category(req, res, next){
        const basket = req.session.basket,
              categories = data.fetchAllCategories(),
              category = data.fetchCategoryById(req.params.category_id);

        res.render('pages/category', {
            basket: basket,
            categories: categories,
            category: category
        });
    },

    details(req, res, next){
        // const details = React.renderToString(<ProductDetails product_details={req.params.product_id} />);
        const basket = req.session.basket,
              categories = data.fetchAllCategories(),
              product = data.fetchProductById(req.params.product_id);

        res.render('pages/details', {
            basket: basket,
            categories: categories,
            product: product
        });
    }

};