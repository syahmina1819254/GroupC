import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
<<<<<<< HEAD
import Slider, {images} from '../screens/Slider';
=======
import Slider, {images} from './components/Slider';
>>>>>>> b3be21d5cf6be83230be6df0f00ec912482bba77

const Separator = () => (
  <View style={style.separator} />
);

<<<<<<< HEAD
export default class Dashboard extends Component{
=======

export default class App extends Component{
>>>>>>> b3be21d5cf6be83230be6df0f00ec912482bba77

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

<<<<<<< HEAD
})
=======
})

>>>>>>> b3be21d5cf6be83230be6df0f00ec912482bba77
