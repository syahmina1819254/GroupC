import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { removeDonation } from '../services/DataService';
import { Alert,View,StyleSheet} from 'react-native';
import { Content, Text, List, Container,Footer,FooterTab,Button } from 'native-base';
import { db } from '../configure/db';
import PaymentList from '../component/PaymentList';

import * as firebase from 'firebase';


export default class PaymentHistyory extends Component {
  constructor(){
    super();
    this.state = {
    Donation:[],
  }
  }


  componentDidMount() {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    let DonationRef = db.ref('/Donation'+userid)

     DonationRef.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({Donation: firebaseData});
            console.log(this.state.Donation);
          }
     });

  }

  deleteConfirmation = (DonationID) => {
    Alert.alert(
      'Status', 
      'Are you sure you want to delete this Donation?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => removeDonation(DonationID)}
      ],
      { cancelable: false }
      );
  }


  render() {
    const state = this.state;
    return (
      <View style={styles.container}>

        <Content padder>
        <Text style={styles.Header}>DONATION HISTORY</Text>
        <Container>
        <List vertical={true}>
        <PaymentList Donation={this.state.Donation} onPress={(DonationID) => {Actions.PaymentList({DonationID: DonationID});}} onLongPress={(DonationID) => {this.deleteConfirmation(DonationID)}} />
        </List>
        <Text>{this.props.DonationID}</Text>
        </Container>
        </Content>
        <Footer >
          <FooterTab  style={{backgroundColor:"#FFF" }}>

          <Button vertical onPress={() => {Actions.Dashboard();}}>
              <Text style={styles.textFooter}>Dashboard</Text>
            </Button>

          <Button vertical onPress={() => {Actions.payment();}}>
              <Text style={styles.textFooter}>Donate Now</Text>
            </Button>

           

            <Button vertical onPress={() => {Actions.DonateList();}}>
              <Text style={styles.textFooter}>List of Organisation</Text>
            </Button>

            <Button vertical onPress={() => {Actions.PaymentHistory();}}>
              <Text style={styles.textFooter}>Donation History</Text>
            </Button>

          
          </FooterTab>
        </Footer>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecfccb",
    justifyContent: "center",
    
    
  },
  Header:{
    textAlign: "center", 
    fontSize:25,
    height: 40, 
    fontWeight: "bold", 
    marginTop: 20,
    marginBottom: 20,
    color:"#365314"
  },
  textFooter:{
    fontWeight: "bold",
    textAlign:'center',
    color:"black"
  }
});