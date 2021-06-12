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
      <Text style={styles.header}>RUMAH EHSAN KUALA KUBU BHARU</Text>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBj1QifYHuA1W96lmeyzb7S5XWJqMbqzlKce9ffSuj5DGSPCWih3pRhUkIuXfhQP0efs&usqp=CAU'}} 
      style={{ width: 300, height: 250 }} />
      <Separator/>
      <Text style={styles.content}>
      Rumah Ehsan (RE) was established to provide care, treatment and protection to the 
      elderly who are ill, poor and have no inheritance in order to continue living in 
      a comfortable and peaceful environment. Services and facilities provided at RE 
      are as follows:Care and protection, Guidance and counseling, Physiotherapy 
      services, Religious guidance, Recreation and rehabilitation work, Medical treatment.
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
  },
});