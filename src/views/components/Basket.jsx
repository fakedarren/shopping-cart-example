const _ = require('lodash'),
      React = require('react');


module.exports = React.createClass({
    render(){
        if (_.size(this.props.content_list)){
            return (
                <div className="basket-content">
                    <ul>
                    {_.map(this.props.content_list, (item) => {
                        return (
                            <li>
                                {item.product.name} {item.quantity}
                            </li>
                        );
                    })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="basket-content is-empty">
                    <p className="empty-message">
                        <svg viewBox="0 0 100 100" className="icon-basket" dangerouslySetInnerHTML={{__html:'<use xlink:href="#basket"></use>'}}></svg>
                        Your basket is empty
                    </p>
                </div>
            );
        }
    }
});