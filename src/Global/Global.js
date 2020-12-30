
import React,{useEffect, useState} from 'react'
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, Dimensions, ImageBackground} from 'react-native';
import axios from 'axios';

const {height, width} = Dimensions.get('window');
const Global = () => {
   
    const CounrtyURL = "https://api.covid19api.com/summary";

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

     const Separator = () => {
        return (
          <View
            style={{
              height: 1.5,
              backgroundColor: "#CED0CE",
            }}
          />
        )
      }
    //Fetching data
    useEffect(() => {
        fetch(CounrtyURL)
        .then((response) => response.json())
        .then((json) => setData(json.Global))
        .catch((error) => alert(error))
        .finally(setLoading(false))
    }, []);

    const population = Number(7800000000);
    const confirmed = Number(data.TotalConfirmed);
    const recovered = Number(data.TotalRecovered);
    const death = Number(data.TotalDeaths);
    
    return(
    <SafeAreaView style={{backgroundColor: 'rosybrown',height: '100%',}}>
    <ImageBackground source={require('../assets/bg-world.png')} resizeMode='cover' style={{width: width, height: height}}>
    <Text style={{fontSize:16, fontStyle: 'italic', fontWeight: '700', margin: 10, color: 'black'}}>* Percentile of the world population affected with Covid-19</Text>
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 100}}>
    <View style={{flexDirection: 'row',}}>
    <View style={{borderRadius: 100, backgroundColor: 'rgba(255,99,71,0.69)', height: 150, width: 150, padding: 10, marginBottom: 20, marginRight: 30}}>
    <Text style={{fontSize: 39, fontWeight: 'bold', color: 'black', alignSelf: 'center', marginVertical: 20}}>{parseFloat((confirmed/population)*100).toFixed(3)}</Text>
    <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color:'white'}}>Suspected</Text>
    </View>
    
    <View style={{borderRadius:100, backgroundColor: 'rgba(85,107,47,0.69)', height: 150, width: 150,  padding: 10, marginBottom: 20}}>
    <Text style={{fontSize: 39, fontWeight: 'bold', color: 'black', alignSelf: 'center', marginVertical: 20}}>{parseFloat((recovered/population)*100).toFixed(3)}</Text>
    <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color:'white'}}>Revived</Text>
    </View>
    </View>
    <View style={{borderRadius:200, backgroundColor: 'rgba(247,20,147,0.5)', height: 200, width: 200,  padding: 10, marginBottom: 20}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color:'white',marginVertical: 20 }}>Deceased</Text>
    <Text style={{fontSize: 39, fontWeight: 'bold', color: 'black', alignSelf: 'center', }}>{parseFloat((death/population)*100).toFixed(3)}</Text>
    </View>
    
    {/* <Text>Confirmed ({data.TotalConfirmed}/)</Text>
    <Text>Recovered {data.TotalRecovered}</Text>
    <Text>Deaths {data.TotalDeaths}</Text> */}
    </View>
    </ImageBackground>
    </SafeAreaView>
    )
}
export default Global
