var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav />
            <div className="hero-header">
                <h1 className="text-center">Weather Redux App</h1>
            </div>
            <div className="container">
                { props.children }
            </div>
        </div>
    );
};

module.exports = Main;