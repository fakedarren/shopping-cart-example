var $ = require('../lib/jquery-2.1.4.min'),
    ProductDetails = require('../../../views/components/ProductDetails'),
    React = require('react');


var wrapper = document.querySelector('.main-content');


$('body').on('click', 'a[data-product-id]', function(evt){
    evt.preventDefault();

    var href = $(this).attr('href'),
        product_id = $(this).data('product-id');

    $.get('/api/product/' + product_id, function(data){
        var productDetailsInstance = React.createFactory(ProductDetails)({
                product_details: data
            }),
            productDetailsElement = React.render(productDetailsInstance, wrapper);
    });

    window.history.pushState('#', null, href);
});