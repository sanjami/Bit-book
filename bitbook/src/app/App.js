import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './partials/Header';
import Footer from './partials/Footer';
import People from './PeoplePage/People';
import Home from './HomePage/Home';
import TextPostDetails from './PostPage/TextPostDetails';
import ImagePostDetails from './PostPage/ImagePostDetails';
import VideoPostDetails from './PostPage/VideoPostDetails';
import Profile from './ProfilePage/Profile';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/people' component={People} />
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/feeds/text:id' component={TextPostDetails} />
          <Route exact path='/feeds/image:id' component={ImagePostDetails} />
          <Route exact path='/feeds/video:id' component={VideoPostDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
