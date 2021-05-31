import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Slider from './components/Slider';

const Separator = () => (
  <View style={style.separator} />
);

const images = [
  'http://4.bp.blogspot.com/-O0vMfUzRIuI/WsZS4JA3C2I/AAAAAAAABCA/SqExYlNbwrMb1KuD5BEX-dM_erX5rD4GACK4BGAYYCw/s1600/logo_rtk_rumah_titian_kasih%2B%25281%2529.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBj1QifYHuA1W96lmeyzb7S5XWJqMbqzlKce9ffSuj5DGSPCWih3pRhUkIuXfhQP0efs&usqp=CAU',
  'https://scontent.fkul13-1.fna.fbcdn.net/v/t1.6435-9/82245767_104187164440837_2535685521179410432_n.png?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HEvWmqT3IogAX_VkYDh&tn=x9jtqJzPpHmllqgO&_nc_ht=scontent.fkul13-1.fna&oh=611ebe7d23f2ae6e979f8ece6de5ab69&oe=60D99793',
  'https://www.nuruliman.cc/images/logo.png',
  'https://pbs.twimg.com/profile_images/581658588965314560/x60cbeJl_400x400.jpg'  
  ]

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

