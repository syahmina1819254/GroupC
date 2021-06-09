import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Dashboard from './src/screens/Dashboard';
import payment from './src/screens/payment';
import DonateList from './src/screens/DonateList';
import DetailsNur from './src/screens/DetailsNur';
import DetailsNurulIman from './src/screens/DetailsNurulIman';
import DetailsRTK from './src/screens/DetailsRTK';
import DetailsRumahEhsan from './src/screens/DetailsRumahEhsan';
import DetailsSRA from './src/screens/DetailsSRA';
import PaymentHistory from './src/screen/PaymentHistory'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginScreen" component={LoginScreen} left={()=>null} title="i-Donate" initial={true} />
          <Scene key="SignupScreen" component={SignupScreen} left={()=>null} title="i-Donate" />
          <Scene key="Dashboard" component={Dashboard} left={()=>null} title="i-Donate" />
          <Scene key="payment" component={payment} left={()=>null} title="i-Donate" />
          <Scene key="DonateList" component={DonateList} left={()=>null} title="i-Donate"  />
          <Scene key="DetailsNur" component={DetailsNur} left={()=>null} title="i-Donate"  />
          <Scene key="DetailsNurulIman" component={DetailsNurulIman} left={()=>null} title="i-Donate"  />
          <Scene key="DetailsRTK" component={DetailsRTK} left={()=>null} title="i-Donate"  />
          <Scene key="DetailsRumahEhsan" component={DetailsRumahEhsan} left={()=>null} title="i-Donate"  />
          <Scene key="DetailsSRA" component={DetailsSRA} left={()=>null} title="i-Donate"  />
          <Scene key="PaymentHistory" component={PaymentHistory} left={()=>null} title="i-Donate"  />
        </Scene>
      </Router>
    )
  }
}
