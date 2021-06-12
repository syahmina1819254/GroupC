import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Separator = () =>(
  <View style={styles.separator}/>
)
export default function App() {
  return (


  
    <View style={styles.container}>
       <Button color='#518947' title="Back"
        onPress={()=> Actions.DonateList()}></Button>
      <View style={{flex: 1, backgroundColor: '#CDEBC8'}}></View>
      <Text style={styles.header}>RUMAH TITIAN KASEH</Text>
      <Image source={{uri:'http://4.bp.blogspot.com/-O0vMfUzRIuI/WsZS4JA3C2I/AAAAAAAABCA/SqExYlNbwrMb1KuD5BEX-dM_erX5rD4GACK4BGAYYCw/s1600/logo_rtk_rumah_titian_kasih%2B%25281%2529.jpg'}} style={{ width: 300, height: 250 }} />
      <Separator/>
      <Text style={styles.content}>
        Rumah Titian Kaseh is a mixed welfare home for disabled and homeless people including
        elderly, single mothers and children. Majority of residents are children aged up to 18 years old (90 children)
        from various social background. Most of them have poor access to education with poor literacy rate.
        Health education is also an area that is lacking for the residents.
      </Text>
      <Separator/>
      <View style={styles.button}>
        <Button color='#518947' title="Donate Now"
        onPress={()=> Actions.payment()}></Button>
         <Separator/>
    
      </View>
      <Separator/>
      
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
    justifyContent: 'center',
  },
});