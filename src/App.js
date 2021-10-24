import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Kubernetes from './pages/kubernetes/kubernetes';
import Reactive from './pages/reactive-spring/reactive';
import Docker from './pages/docker/docker';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/kubernetes' component={Kubernetes} />
          <Route exact path="/docker" component={Docker} />
          <Route exact path='/reactive' component={Reactive} />
        </Switch>
      </div>
    );
  }
}

export default App;