import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, Image, ScrollView} from 'react-native';
import { Container, Button, Text, Form, Item, Input} from 'native-base';
import * as firebase from 'firebase';


export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
  }

  setEmail = (value) =>{
      this.setState({ email: value });
  }

  setPassword = (value) =>{
      this.setState({ password: value});
  }

  LogIn = () => {
    try {
     if(this.state.email && this.state.password){
      firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            Actions.Dashboard();
           })
         .catch(error => {
           Alert.alert('Status', error.toString(error));
          });
     } else {
       Alert.alert('Status','Please enter your email and password!');
     }
      } catch (error) {
        console.log(error.toString(error));
    }
  };

  SignUp = ()=>{
    Actions.SignupScreen();
  }
  
  render() {
    return (
    <ScrollView>
    <Container style={styles.container}>
    <Container style={styles.container2}>
        <Form>
        <Image source={{uri:'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/8d/6c/b8/8d6cb899-4469-161c-1c62-4d359170d7df/source/256x256bb.jpg'}} 
        style={{ width: 300, height: 250}} />
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
            style={{ margin: 20, backgroundColor: "#4f8b45", marginTop: 20, width: 250 }} onPress={this.LogIn}>
            <Text>Log In</Text>
        </Button>
        <Button
            full
            rounded
            style={{ margin: 20, marginTop: 0 , backgroundColor: "#00599e", width: 250, }} onPress={this.SignUp}>
            <Text>Sign Up</Text>
        </Button>
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
    //alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
