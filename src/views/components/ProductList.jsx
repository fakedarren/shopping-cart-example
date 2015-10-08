const data = require('../../helpers/get-data'),
      React = require('react'),
      slug = require('slug');


module.exports = React.createClass({
    getInitialState(){
        return {
            product_list: this.props.product_list || data['1']
        };
    },
    render(){
        return (
            <div className="products">
                <ul className="product-list">
                {this.state.product_list.map(product => {
                    return (
                        <li className="product-list-item">
                            <a href={'/' + 1 + '/example-url/' + product.id + '/' + slug(product.title, {lower: true})}>
                                {product.title}
                            </a>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
});