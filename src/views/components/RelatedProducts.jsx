const React = require('react');


module.exports = React.createClass({
    render(){
        return (
            <div className="related-content">
                <h3 className="other-products-title">You might like&hellip;</h3>
                <ul className="other-products-list" data-length={this.props.product_list.length}>
                {this.props.product_list.map(product =>{
                    return (
                        <li key={product.id} className="other-products-list-item">
                            <a href={`/${product.category_id}/----/${product.id}/----`} data-product-id={product.id}>
                                <img src={`/img/products/${product.id}/tiny.jpg`} alt={product.name} className="other-products-list-thumbnail" />
                                <h4 className="other-products-list-name">{product.name}</h4>
                            </a>
                        </li>
                    );
                })};
                </ul>
            </div>
        );
    }
});