import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Picker } from 'native-base';
import { addUser } from '../services/DataService';
import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        gender: "",
        icno: null,
        dob: null,
        address:"",
        email: "",
        password: ""
      };
    }
  
    setName = (value) =>{
      this.setState({ name: value });
    }

    setGender = (value) => {
      this.setState({ gender: value });
    }
  
    setIcNo = (value) =>{
      this.setState({ icno: value });
    }

    setDOB = (value) =>{
      this.setState({ dob: value });
    }
  
    setAddress = (value) =>{
      this.setState({ address: value });
    }
  
    setEmail = (value) =>{
      this.setState({ email: value });
    }

    setPassword = (value) =>{
      this.setState({ password: value });
    }

    saveData = () =>{
      if(this.state.name && this.state.gender && this.state.icno && this.state.dob && this.state.address && this.state.email && this.state.password){
        if(isNaN(this.state.email && this.state.password)){
          Alert.alert('Status','Email and Password cannot leave blank!');
        }
         else{
           addUser(this.state.name && this.state.gender && this.state.icno && this.state.dob && this.state.address && this.state.email && this.state.password);
         }
      } else{
         Alert.alert('Status','Empty Field(s)!');
      }
    }

    signUp = () =>{
      try {
         if(this.state.email && this.state.password){
          firebase
              .auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.password)
              .then(user => { 
                     console.log(user);
                     Alert.alert('Status','Sign Up Successful');
                     Actions.LoginScreen();
               })
              .catch(error => {
                Alert.alert('Status',error.toString(error));
              });
         } else {
            Alert.alert('Status','Invalid Email or Password!');
           }
          } catch (error) {
            Alert.alert({ errorMessage: error.message });
          }
     };
  
    render() {
      return (
        //<ImageBackground  source={'bg.png'} style={{width: '100%', height: '100%'}}>
        <ScrollView>
        <Container style={styles.container}>
        <Container style={styles.container2}>
        <Text style={{color: '#365314',fontSize: 30, textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>REGISTRATION</Text>
          <Form>
          <Item style={styles.inputstyle}>
              <Input placeholder='Full Name' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setName}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Gender' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setGender}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Identification No' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setIcNo}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Date of Birth' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setDOB}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Address' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setAddress}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Email' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setEmail}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Password' style={styles.input}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.setPassword}
              />
            </Item>
            <Button
              full
              rounded
              success
              style={{ margin: 20, backgroundColor: "#4f8b45", marginTop: 20, width: 250 }}onPress={() => this.signUp(this.state.email, this.state.password)}>
              <Text>Create Account</Text>
            </Button>
          </Form>
          </Container>
        </Container>
        </ScrollView>
        //</ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#cdebc9",
      //alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    container2: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 20 ,
      padding: 15,
    },
    input: {
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#d8ebd5',
        borderColor: '#d8ebd5',
    },
    inputstyle: {
        width: 260,
        marginTop: 15
    }
  });
  