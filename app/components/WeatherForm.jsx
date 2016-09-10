import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

class WeatherForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (event) => {
   // debugger;
   // event.preventDefault();
    let city = event.searchByCity;
    if (city.length > 0) {
      event.searchByCity = '';
      this.city.setState({ value: "" })
      this.props.onSearch(city);
    }
  };

  render() {
    return (
      <div>
        <Formsy.Form onValidSubmit={this.onFormSubmit} >
          <FormsyText name="searchByCity" type="search" placeholder="Enter in a city" ref={(c) => { this.city = c; }} />
          <RaisedButton type="submit" label="Get Weather" primary={true} />
        </Formsy.Form>
      </div>
    );

  }
};

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default WeatherForm;