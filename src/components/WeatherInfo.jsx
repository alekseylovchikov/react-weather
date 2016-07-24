var React = require('react');

var WeatherInfo = ({ city, temp, desc }) => {
    return (
        <div className="well">
            <table className="table">
                <thead>
                    <tr>
                        <th>City name</th>
                        <th>Temperature</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ city }</td>
                        <td>{ temp } C</td>
                        <td>{ desc }</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    );
};

module.exports = WeatherInfo;