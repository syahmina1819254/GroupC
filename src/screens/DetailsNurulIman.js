import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import nuruliman from './components/nuruliman.jpg';

const Separator = () =>(
  <View style={styles.separator}/>
)
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#CDEBC8'}}></View>
      <Text style={StyleSheet.header}>RUMAH NURUL IMAN</Text>
      <Image source={nuruliman} style={{ width: 300, height: 250 }} />
      <Separator/>
      <Text style={styles.content}>
      Rumah Nurul Iman will ensure that every child under its care 
      receives the necessary love and observation to ensure that the 
      child always feels cared for and loved by the Perak Nurul Iman 
      Love Welfare Organization. In accordance with its establishment, 
      Rumah Nurul Iman is ready to help orphans, the poor and neglected 
      in terms of providing protection, care and education.
      </Text>
      <Separator/>
      <View style={styles.button}>
        <Button color='#518947' title="Donate Now"
        onPress={()=> Actions.payment()}></Button>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfccb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  content:{
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 200,
  },
  button:{
    position: 'absolute',
    alignSelf: 'center',
    width: 272,
    height: 200,
    paddingTop: 20,
    bottom:0,
  },
  header:{
    fontFamily: "roboto-bold",
    fontWeight: "bold",
    color: "#1A4F11",
    fontSize: 26,
    marginTop: 50,
  },
});
