const _ = require('lodash'),
      data = require('../helpers/get-data');


module.exports = {

    add_to_basket(req, res, next){
        const product_id = req.body.product_id,
              quantity = req.body.quantity;

        let basket = _.assign({}, req.session.basket);

        if (basket[product_id]){
            basket[product_id].quantity = _.add(basket[product_id].quantity, quantity);
        } else {
            basket[product_id] = {
                product: data.fetchProductById(product_id),
                quantity: quantity
            };
        }

        req.session.basket = basket;

        next();
    },

    list(req, res, next){
        const basket = req.session.basket,
              categories = data.fetchAllCategories();

        res.render('pages/basket', {
            basket: basket,
            categories: categories
        });
    }

};