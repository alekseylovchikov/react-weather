var React = require('react');

var SavedList = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center">Saved cities</h1>
                <ul className="list-group">
                    <li className="list-group-item">Borovichi</li>
                    <li className="list-group-item">Moscow</li>
                    <li className="list-group-item">Valday</li>
                </ul>
            </div>
        );
    }
});

module.exports = SavedList;