
import React,{useEffect, useState} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, TextInput, ImageBackground} from 'react-native';
import axios from 'axios';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';




const {height, width} = Dimensions.get('window');

const National = ({navigation}) => {
    const CounrtyURL = "https://api.covid19api.com/summary";

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

     const Separator = () => {
        return (
          <View
            style={{
              height: 1.5,
              backgroundColor: "rgba(191, 191, 191, 1)",
              width: width * 0.80,
              alignSelf: 'center'
            }}
          />
        )
      }
    //Fetching data
    useEffect(() => {
        fetch(CounrtyURL)
        .then((response) => response.json())
        .then((json) => setData(json.Countries))
        .catch((error) => alert(error))
        .finally(setLoading(false))
    }, []);
    
    return(
    <SafeAreaView style={{backgroundColor: 'rosybrown',height: '100%' }}>
      <ImageBackground source={require('../assets/bg-world.png')} resizeMode='cover' style={{width: width, height: height}} >
      <TextInput placeholder='Search Country'
      placeholderTextColor='white'
      style={{width: width* 0.95, borderColor: 'rgba(191, 191, 191, 0.5)', borderWidth: 2, alignSelf: 'center', marginTop: 10, backgroundColor: 'rgba(220, 200, 200, 0.85)', borderRadius: 20, paddingHorizontal: 10, fontSize: 16}} />
        {isLoading ? (<ActivityIndicator color="black" />) : (
            <FlatList 
            style={{margin: 10}}
            data={data}
            keyExtractor={({id}, index) => id}
            ItemSeparatorComponent= {Separator}
            renderItem={({item}) => (
                <Text onPress={() => navigation.navigate('Statistics')}
                style={{margin: 10, justifyContent: 'center', alignSelf: 'center', marginTop: 20, fontSize: 17, fontWeight: '600'}}>
                    {item.Country} {"\n"}
                    {/* {item.TotalConfirmed}{"\n"}
                    {item.TotalRecovered}{"\n"}
                    {item.TotalDeaths}{"\n"} */}
                </Text>
            )} />
        )}
        </ImageBackground>
    </SafeAreaView>
    )
}
export default National