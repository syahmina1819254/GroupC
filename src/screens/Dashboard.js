import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Slider, {images} from './components/Slider';

const Separator = () => (
  <View style={style.separator} />
);


export default class App extends Component{

  render(){
    return(
    <View style={{flex: 1, backgroundColor: '#CDEBC8'}}>    
    <View style={style.container}> 
    <Slider images={images}/>

   
    </View>
    <View style={style.button}>
    <Button color='#518947' title="Donate Now"
        onPress={() => Alert.alert('Simple Button pressed')}></Button>

<Separator/>

  <Button color='#518947' title="Donation History"
        onPress={() => Alert.alert('Simple Button pressed')}></Button>
  </View>
  </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
     marginTop:50, 
  },

 button: {
  position: 'absolute',
  alignSelf: 'center',
  width: 272,
  height: 240,
  paddingTop: 20,
  bottom:0,

  },

   separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
  },

})

