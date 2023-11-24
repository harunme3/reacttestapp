import { View, Text, StyleSheet, Image,Dimensions,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import gmcolor from '../data/const/colourconst'

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
   setTimeout(() => {
      navigation.navigate('dashboard')
   }, 1000);
  }, [])

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" />
   <Image style={styles.imagebackground}
    source={require('../../assets/bg_image.png')}/>
    <View>

    </View>
    <View style={{height:50,}}/> 
       <View style={styles.imgcontainer}>
        <Image style={styles.img1} source={require('../../assets/logo.png')} />
        <Image style={styles.img2} source={require('../../assets/splash.png')} />
        <Image style={styles.img3} source={require('../../assets/splashtext.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gmcolor.gmprimary,

  },
  imagebackground:{
    flex:1,
    position:'absolute',
   
  },
   imgcontainer:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
  img1:{
    height: Dimensions.get('screen').height*0.25,
    width: Dimensions.get('screen').width*0.64,
    resizeMode:'contain',
  },
  img2:{
    height: Dimensions.get('screen').height*0.40,
    width: Dimensions.get('screen').width*0.64,
    resizeMode:'contain',
  },
  img3:{
    height: Dimensions.get('screen').height*0.35,
    width: Dimensions.get('screen').width*0.64,
    resizeMode:'contain',
  }
})
export default Splashscreen