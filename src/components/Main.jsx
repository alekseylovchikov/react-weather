var React = require('react');

var Nav = require('Nav');

var heroHeader = {
    padding: '80px'
};

var Main = (props) => {
    return (
        <div>
            <Nav />
            <div style={heroHeader}>
                <h1 className="text-center">Weather App</h1>
            </div>
            <div className="row">
                { props.children }
            </div>
        </div>
    );
};

module.exports = Main;