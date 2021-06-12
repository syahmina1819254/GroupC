import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Separator = () =>(
  <View style={styles.separator}/>
)

goToPayment = () => {
    Actions.payment();
  } 
export default function App() {
   
  return (
    <View style={styles.container}>
        <View style={styles.button2}><Button color='#518947' title="Back"
        onPress={()=> Actions.DonateList()}></Button></View>
       
      <View style={{flex: 1, backgroundColor: '#CDEBC8'}}></View>
      <Text style={styles.header}>PUSAT JAGAAN OKU NUR</Text>
      <Image source={{uri:'https://pbs.twimg.com/profile_images/581658588965314560/x60cbeJl_400x400.jpg'}} 
      style={{ width: 300, height: 250 }} />
      <Separator/>
      <Text style={styles.content}>
      Oku Nur's main purpose is to take care of the elderly and the disabled. 
      Oku Nur houses more than 90 residents consisting of men, women and children 
      aged between eight months to 97 years. These people come from a 
      variety of backgrounds and have their own problems. Some have 
      disabilities such as paralysis, Down syndrome and mental retardation. 
      There are also those who are among the elderly who suffer from various 
      diseases such as heart, diabetes and high blood pressure.
      </Text>
      <Separator/>
      <View style={styles.button}>
        <Button color='#518947' title="Donate Now"
          onPress={()=> Actions.payment()} ></Button>
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
    marginBottom: 150,
    justifyContent: 'center',
  },
  
  button:{
    position: 'absolute',
    alignSelf: 'center',
    width: 272,
    height: 200,
    paddingTop: 70,
    bottom:0,
   
    
  },
  button2:{
    alignSelf: 'flex-start',
    marginTop:5
  },

  header:{
    fontFamily: "roboto-bold",
    fontWeight: "bold",
    color: "#1A4F11",
    fontSize: 24,
    marginTop: 15,
  },
});