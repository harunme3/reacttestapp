import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import gmcolor from '../data/const/colourconst'

const Splashscreen = ({ navigation }) => {
  // useEffect(() => {
  //  setTimeout(() => {
  //     navigation.navigate('dashboard')
  //  }, 30000);
  // }, [])

  return (
    <View style={styles.container}>
   <Image style={{
    flex:1,
    position:'absolute',
   }} source={require('../../assets/bg_image.png')}/>

       <View style={styles.imgcontainer}>
       <View></View>
        <Image style={styles.img1} source={require('../../assets/logo.png')} />
        <Image style={styles.img2} source={require('../../assets/splash.png')} />
        <Image style={styles.img3} source={require('../../assets/splash.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gmcolor.gmprimary,
  },

  
  img1: {

height:200,
width:300,

  },
  img2: {
    height:250,
    width:300,
  },
  img3: {
    height:200,
width:300,


  },
  imgcontainer:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  }
})
export default Splashscreen