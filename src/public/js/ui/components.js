// var $ = require('../lib/jquery-2.1.4.min'),
//     data = require('../../../helpers/get-data'),
//     Product = require('../../../views/components/Product'),
//     React = require('react');


// var productInstance = React.createFactory(Product)({
//         category_id: $(this).data('category-id') || '1'
//     }),
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

//     window.history.pushState('#', null, href);
// });

// $('a').css('color', 'red');