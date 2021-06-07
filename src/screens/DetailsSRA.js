import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
      The SRA Elderly Care Center (PJWTSRA) was established for the purpose of 
      caring for the elderly. The elderly in PJWTSRA consist of those who are 
      left in the hospital who are not claimed for more than 1 month and above, 
      families who are unable to manage their elderly and the elderly who have 
      no shelter and live alone.
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
