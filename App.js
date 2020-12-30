import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem  } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements'
import {Fontisto} from 'react-native-vector-icons/Fontisto'

import Global from './src/Global/Global';
import Favourites from './src/Favourites/Favourites';
import National from './src/National/National';
import Statistics from './src/Statistics/Statistics';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <NavigationContainer>
    <Drawwer />
    </NavigationContainer>
    
  )
}

const DrawerContent = props => {
  return(
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <Text style={{marginLeft: 10, marginTop: 5, fontSize: 22, fontStyle: 'italic', textDecorationLine: 'underline'}}>Statistics</Text>
      <DrawerItem
        label="Global"
        onPress={() => props.navigation.navigate('Global')}
        icon={() => <Icon 
          name='world-o'
          type='fontisto'
          color='rosybrown'
           /> }
      />
      <DrawerItem
        label="National"
        onPress={() => props.navigation.navigate('National')}
        icon={() => <Icon 
          name='flag-o'
          type='font-awesome'
          color='tomato'
           /> }
      />
      <DrawerItem
        label="Favourites"
        onPress={() => props.navigation.navigate('Favourites')}
        icon={() => <Icon 
          name='heart'
          type='feather'
          color='darkolivegreen'
           /> }
      />
    </DrawerContentScrollView>
  )
}
const Drawwer = () => {
  return(
    <Drawer.Navigator initialRouteName="Global" drawerContent= {(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  )
}

const Screens = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Global" component={Global} 
    
    options={{
            headerStyle: {
            backgroundColor: 'rosybrown', //Set Header color
            // borderColor: 'rgba(230, 126, 34, 0.1)',
            // borderWidth: 3,
             borderBottomColor: 'white',
             borderBottomWidth: 1
          } }}/>
    <Stack.Screen name="National" component={National}
     options={{
      headerStyle: {
      backgroundColor: 'rosybrown', //Set Header color
      // borderColor: 'rgba(230, 126, 34, 0.1)',
      // borderWidth: 3,
      // borderBottomColor: 'rgba(200, 200, 200, 0.25)',
      // borderBottomWidth: 3.5
      borderBottomColor: 'white',
      borderBottomWidth: 1
    } }}/>
    <Stack.Screen name="Favourites" component={Favourites} 
     options={{
      headerStyle: {
      backgroundColor: 'rosybrown', //Set Header color
      // borderColor: 'rgba(230, 126, 34, 0.1)',
      // borderWidth: 3,
      // borderBottomColor: 'rgba(200, 200, 200, 0.25)',
      // borderBottomWidth: 3.5
      borderBottomColor: 'white',
      borderBottomWidth: 1
    } }}/>
    <Stack.Screen name="Statistics" component={Statistics} 
     options={{
      headerStyle: {
      backgroundColor: 'rosybrown', //Set Header color
      // borderColor: 'rgba(230, 126, 34, 0.1)',
      // borderWidth: 3,
      // borderBottomColor: 'rgba(200, 200, 200, 0.25)',
      // borderBottomWidth: 3.5
      borderBottomColor: 'white',
      borderBottomWidth: 1
    } }}/>
    </Stack.Navigator>
  )
}

export default App;
