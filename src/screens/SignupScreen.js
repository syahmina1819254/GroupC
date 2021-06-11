import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, ScrollView} from 'react-native';
import { Container, Button, Text, Form, Item, Input} from 'native-base';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
  
    setEmail = (value) =>{
      this.setState({ email: value });
    }

    setPassword = (value) =>{
      this.setState({ password: value });
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
          }
          else {
            Alert.alert('Status','Name and password cannot leave blank!');
           }
          } catch (error) {
            Alert.alert({ errorMessage: error.message });
          }
     };
  
    render() {
      return (
        <ScrollView>
        <Container style={styles.container}>
        <Container style={styles.container2}>
        <Text style={{color: '#365314',fontSize: 30, textAlign: "center", height: 40, fontWeight: "bold", marginTop: 100, marginBottom: 30}}>REGISTRATION</Text>
          <Form>
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
            <Text 
                style={styles.loginText}
                onPress={() => Actions.LoginScreen()}>
                Already Registered? Click here to login
            </Text>
          </Form>
          </Container>
        </Container>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#cdebc9",
      justifyContent: "center",
      padding: 20,
      
    },
    container2: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 20 ,
      padding: 15,
      marginTop: 30,
      marginBottom: 30
      
    },
    input: {
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#d8ebd5',
        borderColor: '#d8ebd5',
    },
    loginText: {
      color: '#00599e',
      marginTop: 10,
      textAlign: 'center'
    },
    inputstyle: {
        width: 260,
        marginTop: 15
    }
  });
