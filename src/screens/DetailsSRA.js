import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import sra from './components/sra.jpg';

const Separator = () =>(
  <View style={styles.separator}/>
)
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#CDEBC8'}}></View>
      <Text style={StyleSheet.header}>RUMAH PERLINDUNGAN ORANG TUA SRA</Text>
      <Image source={sra} style={{ width: 300, height: 250 }} />
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
