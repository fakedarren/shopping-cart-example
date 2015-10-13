var $ = require('../lib/jquery-2.1.4.min'),
    ProductList = require('../../../views/components/ProductList'),
    React = require('react');


var product_list = document.querySelector('[data-product-list]'),
    wrapper = document.querySelector('.main-content');


if (product_list){
    var data = $(product_list).data('product-list'),
        productListInstance = React.createFactory(ProductList)({
            product_list: data
        }),
        productListElement = React.render(productListInstance, wrapper);

    $('body').on('click', '.main-menu a[data-category-id]', function(evt){
        evt.preventDefault();

        var category_id = $(this).data('category-id'),
            href = $(this).attr('href');

        $.get('/api/category/' + category_id, function(data){
            productListElement.setProps({
                product_list: data
            });
        });

        window.history.pushState('#', null, href);
    });

}