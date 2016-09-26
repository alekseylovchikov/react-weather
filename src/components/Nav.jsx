var React = require('react');
var { Link, IndexLink } = require('react-router');

var ActiveStyle = {
    borderBottom: '2px solid #2199e8'
};

var Nav = React.createClass({
    onSearch: function(e) {
        var citySearch = e.target;
        e.preventDefault();
        console.log(citySearch);
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu" data-dropdown-menu>
                        <li className="menu-text">Weather App</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={ ActiveStyle }>Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={ ActiveStyle }>About</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather" />
                            </li>
                            <li>
                                <input type="submit" value="Search" className="button" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;