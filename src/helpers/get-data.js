const _ = require('lodash'),
      categories = require('../../data/categories.json'),
      products = require('../../data/products.json');


module.exports = {

    fetchAllCategories(){
        return categories.map(category => {
            category.products = products.filter(product => {
                return product.category_id == category.id;
            });
            return category;
        });
    },

    fetchAllProducts(){
        return products.map(product => {
            product.category = _.find(categories, (category) => {
                return category.id == product.category_id;
            });
            return product;
        });
    },

    fetchCategoryById(category_id){
        let category = _.find(categories, (item) => {
                return item.id == category_id;
            });

        category.products = products.filter(product => {
            return product.category_id == category_id;
        });

        return category;
    },

    fetchOthersByCategoryId(category_id){
        const all_categories = this.fetchAllCategories(),
              other_categories = _.filter(all_categories, (x) => x.id != category_id);

        return _.flatten(_.map(other_categories, (x) => x.products));
    },

    fetchProductById(product_id){
        return _.find(products, (product) => {
            return product.id == product_id;
        });
    }

};