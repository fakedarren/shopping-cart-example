const React = require('react'),
      slug = require('slug');


module.exports = React.createClass({
    render(){
        return (
            <ul className="product-list">
            {this.props.home_product_list.map(product => {
                const category_slug = slug(product.category.name, {lower: true}),
                      product_slug = slug(product.name, {lower: true});

                const img_src = `/img/products/${product.id}/tiny.jpg`,
                      url = `/${product.category.id}/${category_slug}/${product.id}/${product_slug}`;

                return (
                    <li className="product-list-item">
                        <a href={url}>
                            <img src={img_src} alt={product.name} className="product-list-thumbnail" />
                            <h2 className="product-list-name">{product.name}</h2>
                        </a>
                    </li>
                );
            })};
            </ul>
        );
    }
});