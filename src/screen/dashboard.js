import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.imagebackground}
          source={require("../../assets/bg_image.png")}
        />
        <View style={styles.imgcontainer}>
          <Image
            style={styles.img1}
            source={require("../../assets/rentimg.png")}
          />
          <View style={styles.textrow}>
            <View style={{width:150,}}>
              <Text style={styles.text1} >Board Games Rental</Text>
            </View>
            <View style={{width:150,}}>
              <Text  style={styles.text2}>
                With Gamistaan, you can play all the games* you want at a
                fraction of the cost
              </Text>
            </View>
          </View>
          
          
          
        </View>
        <View style={styles.btnarea}>
        <Text  style={styles.text3} >Categories</Text>
        </View>
   
     
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gmcolor.gmwhite,
  },
  imagebackground: {
    flex: 1,
    position: "absolute",
  },
  imgcontainer: {
    justifyContent: "center",
    height: Dimensions.get("screen").height * 0.3,
    backgroundColor: gmcolor.gmprimary,
  },
  img1: {
    height: Dimensions.get("screen").height * 0.28,
    width: Dimensions.get("screen").width,
    resizeMode: "cover",
  },
  text1: {
    fontSize: 20,
    color: gmcolor.gmwhite,
    fontFamily: 'Neusharp-Bold',
    fontWeight:"bold"
 
  },

  text2: {
    fontSize: 10,
    color: gmcolor.gmwhite,
    fontFamily: "GalanoGrotesque-Bold",
    fontWeight:"bold",
  
  },
  text3: {
    fontSize: 20,
    color: gmcolor.gmprimary,
    fontFamily: 'Neusharp-Bold',
    fontWeight:"bold",
    textDecorationLine:"underline",
  },
  textrow: {
    width:'100%',
    padding:8.0,
    position: "absolute",
    bottom: 12,
    flexDirection: "row",
    justifyContent:  "space-between",
    alignItems:"center",
  },

  btnarea:{
    flex:1,
    position:"relative",
  }
});
export default Dashboard;
