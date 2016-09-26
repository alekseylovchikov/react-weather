var React = require('react');
var { Link } = require('react-router');

var About = () => {
    return (
        <div className="well">
          <h1 className="text-center page-title">About</h1>
          <div className="large-4 medium-4 columns">
            <img src="https://pp.vk.me/c630516/v630516652/315b7/MmbCAjHPAWc.jpg" width="100%" />
          </div>
          <div className="large-8 medium-8 columns">
            <h3>Aleksey Lovchikov</h3>
            <h4>Junior Front-End Developer</h4>
            <h5>Skills list:</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.JS</li>
              <li>Ruby on Rails</li>
            </ul>
            <h5>Contacts:</h5>
            <ul>
              <li>Link to github profile <a href="https://github.com/alekseylovchikov" target="_blank">alekseylovchikov</a></li>
              <li>Email: <a href="mailto:aleksey.lovchikov@gmail.com">aleksey.lovchikov@gmail.com</a></li>
              <li>Skype: lovchikov_aleksey</li>
              <li>Tel: +7 999 223-92-97</li>
              <li>Telegram: @fruitdev</li>
            </ul>
          </div>
        </div>
    );
};

module.exports = About;
