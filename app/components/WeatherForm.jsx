import React, {Component, PropTypes} from 'react';
import Nav from './Nav';
import 'react-foundation-components/lib/_typography.scss';
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/forms';
import {Row, Column} from 'react-foundation-components/lib/grid';
import { Button } from 'react-foundation-components/lib/button';


class WeatherForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (event) => {
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
        <form onSubmit={this.onFormSubmit} >
          <Row>
            <Column largeCentered="centered" small={4}>
              <FormField>
                <input type="search" placeholder="Enter in a city" ref="city"></input>
              </FormField>
              <FormField>
                <Button type="submit" expanded hollow>
                  Get Weather
                  </Button>

               </FormField>
            </Column>
          </Row>
        </form>
      </div>
    )

  }
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
}


export default WeatherForm;