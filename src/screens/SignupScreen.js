import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, Image} from 'native-base';
import * as firebase from 'firebase';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        gender: "",
        icno: 0,
        dob: "",
        address:"",
        email: "",
        password: ""
      };
    }
  
    SignUp = (email, password) => {
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password);
        firebase.auth().onAuthStateChanged(user => {
           alert(user.email);
        })
      } catch (error) {
        console.log(error.toString(error));
      }
    };
  
  
    render() {
      return (
        <Container style={styles.container}>
          <Form>
          <Item style={styles.inputstyle}>
              <Input placeholder='Full Name' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Gender' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Identification No' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Date of Birth' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Address' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Email' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.inputstyle}>
              <Input placeholder='Password' style={styles.input}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              full
              rounded
              success
              style={{ marginTop: 20 }}onPress={() => this.SignUp(this.state.email, this.state.password)}>
              <Text>Create Account</Text>
            </Button>
          </Form>
        </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ecfccb",
      //alignItems: "center",
      justifyContent: "center",
      padding: 10,
      
    },
    button: {
        backgroundColor: "#365314",
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black'
    },
    inputstyle: {
        width: 300,
        marginTop: 15
    }
  });
  