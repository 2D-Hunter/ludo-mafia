import { View, Text, StatusBar, Animated } from 'react-native'
import React from 'react'
// import { Stack } from 'expo-router'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'
import SignupScreen from './SignupScreen';
import SplashScreen from './SplashScreen';
import OTPScreen from './OTPScreen';
import index from './(tabs)/index';
import refer from './(tabs)/refer';
import adda from './(tabs)/adda';
import account from './(tabs)/account';
import _layout from './(tabs)/_layout'
import { Tabs } from 'expo-router'
import { TabBar } from './../components/TabBar'
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen()
{
  return(
    <Tab.Navigator tabBar={props => <TabBar {...props} />}
      initialRouteName='account' 
      >
      <Tab.Screen name='index' component={index} options={{title: "Home"}}/>
      <Tab.Screen name='refer' component={refer} options={{title: "Refer", headerStatusBarHeight:0}}/>
      <Tab.Screen name='adda' component={adda} options={{title: "Adda", headerStatusBarHeight:0}}/>
       <Tab.Screen name='account' component={account} options={{title: "Account", headerTitleAlign:'left'}}/>
    </Tab.Navigator>

    
  );
}
export default function Auth() {
  return (
     <NavigationContainer independent={true}>
      
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='SplashScreen' component={SplashScreen} screenOptions={{headerShown:false}}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen} screenOptions={{headerShown:false}}/>
        <Stack.Screen name='OTPScreen' component={OTPScreen} screenOptions={{headerShown:false}}/> */}
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
     </NavigationContainer>
  )
}