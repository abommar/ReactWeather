var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                Welcome to the About Page
            </p>
            <p>
                <Link to='https://github.com/abommar/ReactWeather'>On GitHub</Link>
            </p>

        </div>
    )
};
module.exports = About;
