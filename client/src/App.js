import React, { Component } from 'react';
import { Router, Route} from 'react-router';
import {browserHistory } from 'react-router';
import ImageNameViewer from './ImageNameViewer';
import ImageUploader from './ImageUploader';


class App extends Component {
   render() {
    const Home = () => <h1>Welcome to the Image Uploader</h1>
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/upload' component={ImageUploader} />
        <Route path='/display' component={ImageNameViewer} />
      </Router>
    )
  }
}


export default App