const _ = require('lodash'),
      Basket = require('../views/components/Basket'),
      data = require('../helpers/get-data'),
      ProductDetails = require('../views/components/ProductDetails'),
      ProductList = require('../views/components/ProductList'),
      React = require('react'),
      RelatedProducts = require('../views/components/RelatedProducts');


module.exports = {

    category(req, res, next){
        const categories = data.fetchAllCategories(),
              category = data.fetchCategoryById(req.params.category_id),
              other_products = data.fetchOthersByCategoryId(req.params.category_id);

        const html_basket = React.renderToString(<Basket content_list={req.session.basket} />),
              html_product_list = React.renderToString(<ProductList product_list={category} />),
              html_related_products = React.renderToString(<RelatedProducts product_list={_.sample(other_products, 6)} />);

        res.render('pages/category', {
            categories: categories,
            html_basket: html_basket,
            html_product_list: html_product_list,
            html_related_products: html_related_products
        });
    },

    details(req, res, next){
        const categories = data.fetchAllCategories(),
              product = data.fetchProductById(req.params.product_id);

        const html_basket = React.renderToString(<Basket content_list={req.session.basket} />),
              html_product_details = React.renderToString(<ProductDetails product_details={product} />);

        res.render('pages/details', {
            categories: categories,
            html_basket: html_basket,
            html_product_details: html_product_details,
            product: product
        });
    }

};