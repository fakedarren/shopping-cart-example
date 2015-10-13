var $ = require('./lib/jquery-2.1.4.min'),
    ProductList = require('./components/product-list'),
    React = require('react');


// $('body').on('click', '.main-menu a[data-category-id]', function(evt){
//     evt.preventDefault();

//     var category_id = $(this).data('category-id'),
//         href = $(this).attr('href');

//     $.get('/api/category/' + category_id, function(data){


//         var productListInstance = React.createFactory(ProductList)({
//                 product_list: data
//             }),
//             productElement = ;



//         console.log(data);
//     });

//     window.history.pushState('#', null, href);
// });
//     productElement = React.render(productInstance,
//         document.getElementById('product'));;


// productElement.setState({
//     'category_id': $('#product').data('category-id') || '1',
//     'product_list': data[$('#product').data('category-id') || '1']
// });


// $('body').on('click', '.main-menu a', function(evt){
//     evt.preventDefault();

//     var category_id = $(this).data('category-id'),
//         href = $(this).attr('href');

//     productElement.setState({
//         category_id: category_id,
//         product_list: data[category_id]
//     });

// });

// $('a').css('color', 'red');