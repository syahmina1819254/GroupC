import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Actions } from 'react-native-router-flux';

const images = [
  ['http://4.bp.blogspot.com/-O0vMfUzRIuI/WsZS4JA3C2I/AAAAAAAABCA/SqExYlNbwrMb1KuD5BEX-dM_erX5rD4GACK4BGAYYCw/s1600/logo_rtk_rumah_titian_kasih%2B%25281%2529.jpg', 'Rumah Titian Kasih', 'Home for the disabled and the elderly'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBj1QifYHuA1W96lmeyzb7S5XWJqMbqzlKce9ffSuj5DGSPCWih3pRhUkIuXfhQP0efs&usqp=CAU'],
  ['https://scontent.fkul13-1.fna.fbcdn.net/v/t1.6435-9/82245767_104187164440837_2535685521179410432_n.png?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HEvWmqT3IogAX_VkYDh&tn=x9jtqJzPpHmllqgO&_nc_ht=scontent.fkul13-1.fna&oh=611ebe7d23f2ae6e979f8ece6de5ab69&oe=60D99793'],
  ['https://www.nuruliman.cc/images/logo.png'],
  ['https://pbs.twimg.com/profile_images/581658588965314560/x60cbeJl_400x400.jpg']  
  ]

function donateList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} 
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
              source={{uri:images[0][0]}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rumahTitianKasihColumn}>
              <Text style={styles.rumahTitianKasih}>{images[0][1]}</Text>
              <Text style={styles.rumahTitianKasih1}>
                {images[0][2]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} 
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
              source={{uri:images[1][0]}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rumahTitianKasihColumn}>
              <Text style={styles.rumahTitianKasih}>Rumah Titian Kasih</Text>
              <Text style={styles.rumahTitianKasih1}>
                Home for the disabled and the elderly
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} 
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
              source={{uri:images[2][0]}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rumahTitianKasihColumn}>
              <Text style={styles.rumahTitianKasih}>Rumah Titian Kasih</Text>
              <Text style={styles.rumahTitianKasih1}>
                Home for the disabled and the elderly
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} 
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
             source={{uri:images[3][0]}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rumahTitianKasihColumn}>
              <Text style={styles.rumahTitianKasih}>Rumah Titian Kasih</Text>
              <Text style={styles.rumahTitianKasih1}>
                Home for the disabled and the elderly
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} 
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
              source={{uri:images[4][0]}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rumahTitianKasihColumn}>
              <Text style={styles.rumahTitianKasih}>Rumah Titian Kasih</Text>
              <Text style={styles.rumahTitianKasih1}>
                Home for the disabled and the elderly
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>




      <Text style={styles.header}>LIST OF ORGANIZATIONS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDEBC8'
  
  },
  rect: {
    width: '100%',
    height: 638,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginTop: 130
  },
  button: {
    width: 375,
    height: 102,
    backgroundColor: "#F6F6F6",
    marginTop: 5,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderColor: "#000000",
    borderRadius: 100
  },
  rumahTitianKasih: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rumahTitianKasih1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12
  },
  rumahTitianKasihColumn: {
    width: 199,
    marginLeft: 18,
    marginTop: 15,
    marginBottom: 12
  },
  imageRow: {
    height: 71,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 24,
    marginRight: 63
  },
  header: {
    fontFamily: "roboto-regular",
    fontWeight: "bold",
    color: "#1A4F11",
    fontSize: 26,
    marginTop: -700,
    marginLeft: 40
  }
});

export default donateList;
