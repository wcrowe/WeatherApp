import React, {Component, PropTypes} from 'react';
import Nav from './Nav';


class WeatherForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit =  (event) => {
    event.preventDefault();
    let city = this.refs.city.value;
    if (city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter in a city" ref="city"></input>
          <button>Get Weather</button>
        </form>
      </div>
    )

  }
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
}


export default WeatherForm;