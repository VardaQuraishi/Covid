import React, {useState, useEffect} from 'react'
import { ImageBackground } from 'react-native';
import {View, Text, Dimensions, SafeAreaView} from 'react-native'
import Icon, {AntDesign} from 'react-native-vector-icons/AntDesign'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const Statistics = () => {
    const [value, setValue] = useState('value');
    const { getItem, setItem } = useAsyncStorage('@storage_key');
  
    const readItemFromStorage = async () => {
      const item = await getItem();
      setValue(item);
    };
  
    const writeItemToStorage = async newValue => {
      await setItem(newValue);
      setValue(newValue);
    };
  
    useEffect(() => {
      readItemFromStorage();
    }, []);

    return(
        <SafeAreaView style={{backgroundColor: 'rosybrown',height: '100%' }} >
        <ImageBackground source={require('../assets/virus.png')} style={{width: width, height: height}} >
        <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={{flexDirection: 'row-reverse', margin: 10, backgroundColor: 'rgba(85,107,47,0.8)', width: width/8, borderRadius: 50,justifyContent: 'center', alignItems: 'center', alignContent: 'center',}} onPress={() => writeItemToStorage()}>
        
            <Icon
            style={{alignItems: 'center', fontWeight: 'bold', alignSelf: 'center'}}
            name='staro'
            type= 'antdesign'
            color='tomato'
            size={38}

            /> 
        
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'rgba(189, 195, 199, 0.7)', height: 420, width: 420,  margin: 20, alignSelf: 'center', borderRadius: 200, padding: 20,}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color:'black', padding: 10}}>Country</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color:'black', padding: 10}}>Deceased</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color:'black', padding: 10}}>Revivied</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color:'black', padding: 10}}>Suspected</Text>
        </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default Statistics
