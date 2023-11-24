
import { StyleSheet, Text, TouchableOpacity, View ,Image, SafeAreaView} from 'react-native';
import useCounterState from './src/hooks/counterstore';
import { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/appnavigator';
import { Font } from 'expo'

export default function App() {


  return (
<AppNavigator/>
  );
}
