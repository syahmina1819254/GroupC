import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View,Alert, StyleSheet,TouchableOpacity} from 'react-native';
import { Container, Content, Button, Icon, Text, Form, Item, Label, Input, Picker , Footer, FooterTab} from 'native-base';
import { addDonation } from '../services/DataService';
import moment from 'moment';

export default class NewScreen extends Component {
  
  constructor() {
    super();
    this.state = {
      amount: null,
      Organisation: null,
      PaymentMethod: "",
      Date:moment().format('DD/MM/YYYY'),
      DonationID:  Math.floor(Math.random() * 100000) + 1,
      amount1:10
    };
  }

  setamount = (value) =>{
    this.setState({ amount: value });
  }

  setOrganisation = (itemValue) =>{
    this.setState({ Organisation: itemValue });
  }

  setPaymentMethod = (itemValue) => {
    this.setState({ PaymentMethod: itemValue });
  }

  setDate = (value) => {
    this.setState({ Date: value });
  }

  setDonationID = (value) => {
    this.setState({ DonationID: value });
  }

  

  saveData = () =>{
    if(this.state.amount && this.state.Organisation && this.state.PaymentMethod && this.state.Date && this.state.DonationID){
      if(isNaN(this.state.amount)){
        Alert.alert('Status','Invalid amount!');
      }
       else{
         addDonation(this.state.amount, this.state.Organisation, this.state.PaymentMethod, this.state.Date, this.state.DonationID);
         Alert.alert('Your payment has been received. Thank your for your donation');
       }
    } else{
       Alert.alert('Status','Empty Field(s)!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Content >
        <Text style={styles.Header}>PAYMENT METHOD</Text>
        <View style={styles.form}>
        <Form >
        
        <Text style={styles.detail}>TOTAL AMOUNT(RM)</Text>
        <Input style={styles.input} placeholder='00.00' onChangeText={this.setamount} />

        <Text style={styles.detail}>CHOOSE THE ORGANISATION</Text>

        <View style={styles.box}>
                  
                   <Picker
                            selectedValue={this.Organisation}
                            style={{ height: 50, width: 350 }}
                            itemStyle={{alignItems: "center"}}
                            onValueChange={this.setOrganisation}>
                            <Picker.Item label="Name of Organisation"  />
                            <Picker.Item label="Rumah Titian Kasih" value="Rumah Titian Kasih" />
                            <Picker.Item label="Rumah Ehsan Kuala Kubu Baru" value="Rumah Ehsan Kuala Kubu Baru"/>
                            <Picker.Item label="Rumah Perlindungan Orang Tua SRA" value="Rumah Perlindungan Orang Tua SRA"/>
                            <Picker.Item label="Rumah Nurul Iman" value="Rumah Nurul Iman"/>
                            <Picker.Item label="Pusat Jagaan OKU Nur" value="Pusat Jagaan OKU Nur"/>
                  </Picker>
                    
        </View>
                    <Text style={styles.detail}>CHOOSE PAYMENT METHOD</Text>

        <View style={styles.box}>            
                  <Picker
              
                            style={{ height: 50, width: 350 }}
                            onValueChange={ this.setPaymentMethod}>
                            <Picker.Item label="Please Select Payment Method" />
                            <Picker.Item label="Online Banking" value="Online Banking" />
                            <Picker.Item label="Credit/Debit Card" value="Credit/Debit Card"/>
                            <Picker.Item label="E-wallet" value="E-wallet"/>

                  </Picker>
        </View>

        </Form>

          <TouchableOpacity >

          <Button  
              full
              rounded
              style={styles.button} onPress={this.saveData}>
            <Text style={{fontWeight: "bold"}}>Confirm</Text>
          </Button>

          </TouchableOpacity>
          
       


        </View>

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
    //alignItems: "center",
    justifyContent: "center",
   
    
  },
  form:{
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  button: {
      backgroundColor: "#365314",
      marginTop: 40,
  },
  input: {
      backgroundColor: "#d8ebd5",
      textAlign: "center",
      borderRadius: 10,
  },

  box:{
      backgroundColor: "#d8ebd5",
      alignItems: "center",
      borderRadius: 10,

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
  detail:{
    textAlign: "left", 
    height: 40, 
    fontWeight: "bold", 
    marginTop: 5,
    marginBottom: 5,
    marginLeft:5,
    fontSize:17,
    
  },
  textFooter:{
    fontWeight: "bold",
    textAlign:'center',
    color:"black"
  }
});