import React, { PropTypes } from 'react'
;
import WeatherNav from './WeatherNav';

//eslinted and converted to a pure function.

// class Main extends Component {
//    render () {
//     return (
//       <div>
//         <WeatherNav/>
//         {this.props.children}
//       </div>
//     );
//    }
// }

const Main = (props) => {
  return (<div>
    <WeatherNav />
      {props.children}
  </div>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
