const React = require('react');


module.exports = React.createClass({
    render(){
        const product = this.props.product_details;

        return (
            <div className="product-details">
                <img src={`/img/products/${product.id}/large.jpg`} alt={product.name} className="product-details-image" />
                <h2 className="product-details-name">{product.name}</h2>
                <p className="product-details-description">{product.description}</p>
                <form method="POST" className="product-details-form">
                    <input type="hidden" name="product_id" value={product.id} />
                    <input type="text" name="quantity" value="1" className="product-quantity" />
                    <button type="submit" className="product-details-add-to-basket">
                        <svg viewBox="0 0 100 100" className="icon-plus" dangerouslySetInnerHTML={{__html:'<use xlink:href="#plus"></use>'}}></svg>
                        Add to basket
                    </button>
                </form>
            </div>
        );
    }
});