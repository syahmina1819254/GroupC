import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Alert, StyleSheet, Image, ImageBackground} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input, View} from 'native-base';
import * as firebase from 'firebase';
import { color } from 'react-native-reanimated';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
  
    LogIn = (email, password) => {
      try {
        firebase.auth().signInWithEmailAndPassword(email, password);
        firebase.auth().onAuthStateChanged(user => {
           alert("Login Successfully");
        })
  } catch (error) {
        console.log(error.toString(error));
      }
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Form>
            <Item>
                <Image source={{
    uri: 'https://www.freepik.com/free-vector/illustration-donation-support-icons_2606877.htm#page=1&query=helping%20hand%20icon&position=4'
  }}>
                </Image>
            </Item>
            <Item style={styles.email}>
              <Input placeholder='Email' style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item style={styles.password}>
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
              style={styles.button} onPress={() => this.LogIn(this.state.email, this.state.password)}  
            >
              <Text>Login</Text>
            </Button>
            {/* takdapatbuatlagi<Link to={this.props.myroute} onClick={hello}>Register Now</Link> */}
          </Form>
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
    email: {
        width: 300,
    },
    password: {
        width: 300,
        marginTop: 15,
    }
  });
  