//API Key for Open Weather
//e2b6434605bdfb9771e2c9b15fca0c8c

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this;

        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
              location: location,
              temp: temp,
               isLoading: false
             });
        }, function(e) {
            that.setState({
              isLoading: false,
              errorMessage:e.message
            });
        });

    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {

            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;

            }
        }

        function renderError (){
          if (typeof errorMessage === 'string'){

            return (
              <ErrorModal message={errorMessage}/>
            )
          }
        }

        return (
            <div className="text-center">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
