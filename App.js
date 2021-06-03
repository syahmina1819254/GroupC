import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Dashboard from './src/screens/Dashboard';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} left={()=>null} title="i-Donate" initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} left={()=>null} title="i-Donate" />
          <Scene key="Dashboard" component={Dashboard} left={()=>null} title="i-Donate" />
        </Scene>
      </Router>
    )
  }
}
