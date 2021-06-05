import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Actions } from 'react-native-router-flux';

function donateList(props) {
  return (
    <View style={styles.container}>
    
    
    
      <View style={styles.rect}>
        <TouchableOpacity
        onPress={()=> Actions.Dashboard()} {/* Put Donation Details Rumah Kasih here */}
         style={styles.button}>
          <View style={styles.imageRow}>
            <Image
              source={{uri:'http://4.bp.blogspot.com/-O0vMfUzRIuI/WsZS4JA3C2I/AAAAAAAABCA/SqExYlNbwrMb1KuD5BEX-dM_erX5rD4GACK4BGAYYCw/s1600/logo_rtk_rumah_titian_kasih%2B%25281%2529.jpg',
              }}
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
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 174
  },
  button: {
    width: 375,
    height: 102,
    backgroundColor: "white",
    marginTop: 7,
    borderRadius: 10,
  },
  image: {
    width: 71,
    height: 71,
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
