import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './partials/Header';
import Footer from './partials/Footer';
import People from './PeoplePage/People';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/people' component={People} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
