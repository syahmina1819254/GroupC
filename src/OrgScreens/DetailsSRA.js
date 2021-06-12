import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Separator = () =>(
  <View style={styles.separator}/>
)
export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.button2}><Button color='#518947' title="Back"
        onPress={()=> Actions.DonateList()}></Button></View>
       
      <View style={{flex: 1, backgroundColor: '#CDEBC8'}}></View>
      <Text style={styles.header}>RUMAH PERLINDUNGAN ORANG TUA SRA</Text>
      <Image source={{uri:'https://scontent.fkul13-1.fna.fbcdn.net/v/t1.6435-9/82245767_104187164440837_2535685521179410432_n.png?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HEvWmqT3IogAX_VkYDh&tn=x9jtqJzPpHmllqgO&_nc_ht=scontent.fkul13-1.fna&oh=611ebe7d23f2ae6e979f8ece6de5ab69&oe=60D99793'}} 
      style={{ width: 300, height: 250 }} />
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