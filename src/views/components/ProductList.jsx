const React = require('react'),
      slug = require('slug');


module.exports = React.createClass({
    render(){
        return (
            <ul className="product-list" data-product-list={JSON.stringify(this.props.product_list)}>
            {this.props.product_list.products.map(product => {
                const category_slug = slug(this.props.product_list.name, {lower: true}),
                      product_slug = slug(product.name, {lower: true});

                const img_src = `/img/products/${product.id}/tiny.jpg`,
                      url = `/${this.props.product_list.id}/${category_slug}/${product.id}/${product.name}`;

                return (
                    <li className="product-list-item">
                        <a href={url}>
                            <img src={img_src} alt={product.name} className="product-list-thumbnail" />
                            <h2 className="product-list-name">{product.name}</h2>
                        </a>
                    </li>
                );
            })}
            </ul>
        );
    }
});

