var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav />
            <h1 className="text-center page-title">Get weather</h1>
            <div className="row">
                { props.children }
            </div>
        </div>
    );
};

module.exports = Main;
