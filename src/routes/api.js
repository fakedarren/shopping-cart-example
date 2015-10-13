const data = require('../helpers/get-data');


module.exports = {

    category(req, res, next){
        const category = data.fetchCategoryById(req.params.category_id);

        res.json(category);
    },

    product_details(req, res, next){
        const product = data.fetchProductById(req.params.product_id);

        res.json(product);
    }

};