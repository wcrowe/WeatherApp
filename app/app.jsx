import React, {Component, PropTypes} from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

//
// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={Main}>
//       <Route name="about" path="/about" component={About} />
//       <Route name="examples" path="/examples" component={Examples} />
//       <IndexRoute component={Weather}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route name="about" path="/about" component={About}/>
          <Route name="examples" path="/examples" component={Examples}/>
          <IndexRoute component={Weather}/>
        </Route>
      </Router>
    )
  }
}





