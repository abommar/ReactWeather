var React = require('react');

// var WeatherMessage= React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         It is {temp} in {location}
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location})  => {

  return (
    <h3>
      It is {temp} in {location}
    </h3>

  );
};

module.exports = WeatherMessage;
