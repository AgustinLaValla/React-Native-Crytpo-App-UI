import React from 'react';
import Tabs from './navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRootNavigator } from './types';
import CryptoDetail from './screens/CrytoDetails/CryptoDetail';
import Transaction from './screens/Transaction/Transaction';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator<StackRootNavigator>();

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </SafeAreaView>
  )
}


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}