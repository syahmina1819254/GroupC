import React, {Component} from 'react';
import {View,  Text, StyleSheet} from 'react-native';
import Slider, {images} from '../screens/Slider';
//import Slider, {images} from './component/Slider';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab,Icon,Button} from 'native-base';
import * as firebase from 'firebase';




const Separator = () => (
  <View style={style.separator} />
);




export default class App extends Component{

  goToPayment = () => {
    Actions.DonateList();
  } 
  
  goToProfile= () => {
    Actions.PaymentHistory();
  }

  goToLoginScreen = () => {
    firebase
        .auth()
        .signOut()
        .then(function() {
          Actions.LoginScreen();
         })
        .catch(function(error) {
          Alert.alert('Status', error.toString(error));
        });
  }
  

  render(){
    return(
     
    <View style={{flex: 1, backgroundColor: '#CDEBC8'}}>  
    <View style={style.button2}>
    <Button full
              rounded
              success
              style={{ backgroundColor: "#CDEBC8", marginTop: 1, width: 100 }}
              onPress={this.goToLoginScreen}><Text  style={{color:"#4f8b45",fontSize:20}}>Logout</Text></Button>
      
      </View>  
    
    <View style={style.container}> 
  
    <Slider images={images}/>
   
    </View>
    <Separator/>  
    <View style={style.button}>
    <Button full
              rounded
              success
              style={{  backgroundColor: "#4f8b45", marginTop: 20, width: 300 }}
       onPress={this.goToPayment}><Text  style={{color:"white",fontSize:20}}>Donate Now</Text></Button>

  <Button full
              rounded
              success
              style={{  backgroundColor: "#4f8b45", marginTop: 10, width: 300 }}
       onPress={this.goToProfile}><Text style={{color:"white",fontSize:20}}>Donation History</Text></Button>
  </View>

  <Separator/>
  <Separator/>

  <Footer >
          <FooterTab  style={{backgroundColor:"#FFF" }}>

          <Button vertical onPress={() => {Actions.Dashboard();}}>
              <Text style={style.textFooter}>Dashboard</Text>
            </Button>

          <Button vertical onPress={() => {Actions.payment();}}>
              <Text style={style.textFooter}>Donate Now</Text>
            </Button>

           

            <Button vertical onPress={() => {Actions.DonateList();}}>
              <Text style={style.textFooter}>List of Organisation</Text>
            </Button>

            <Button vertical onPress={() => {Actions.PaymentHistory();}}>
              <Text style={style.textFooter}>Donation History</Text>
            </Button>

          
          </FooterTab>
        </Footer>
  </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
     marginTop:10, 
     
  },
 button: {
  position: 'absolute',
  alignSelf: 'center',
  height: 200,
  bottom:1,
  },
  button2: {
    
    alignSelf: 'flex-end',
    
    },
   separator: {
    marginVertical: 25,
    borderBottomColor: '#737373',
  },

  textFooter:{
    fontWeight: "bold",
    textAlign:'center'
  }

})