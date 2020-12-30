import React from 'react'
import { ImageBackground } from 'react-native';
import {View, Text, Dimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

const Favourites = () => {
    return (
    <SafeAreaView style={{backgroundColor: 'rosybrown',height: '100%' }}>
    <ImageBackground source={require('../assets/virus.png')} style={{width: width, height: height}}>
    
    </ImageBackground>
    </SafeAreaView>
    )
}
export default Favourites