import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './navigation/exploreScreen';
import FavorScreen from './navigation/favorScreen';
import LoginScreen from './navigation/loginScreen';
import UserInterestScreen from './navigation/interestScreen';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();






const MyTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    flex: 1,
    borderColor: "red"
  },
};

type RouteName = 'Favor' | 'ExploreContent';

const icons: Record<RouteName, {focused: any; unfocused: any}> = {
  Favor: {
    focused: require('./assets/6.png'),
    unfocused: require('./assets/6.png')
  }, 

  ExploreContent: {

    focused: require('./assets/4.png'),
    unfocused: require('./assets/4.png')
  }
}


function TabNavigator() {
  return (
    <Tab.Navigator
  
     
    screenOptions={({route }) => ({
      tabBarIcon: ({focused}) => {
        const icon = focused
        ? icons[route.name as RouteName].focused
        : icons[route.name as RouteName].unfocused
        return <Image source={icon} 
        style={{
          width: 30, 
          height: 30
      }}
        /> },
    
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { ...styles.tabBar, },
    })}
   
 
    >
      
     
      <Tab.Screen 
      name='ExploreContent' 
      component={ExploreScreen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: 'transparent',},
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>
       <Tab.Screen    
      name='Favor'
      component={FavorScreen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: 'transparent',},
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>

    </Tab.Navigator>
  );
}


function AppNavigator() {

  return(
    <NavigationContainer  theme={MyTheme}>
     
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="Login" component=
             {LoginScreen} />
            <Stack.Screen name="interestScreeen" component={UserInterestScreen} />
            <Stack.Screen name="UserExploreScreen" component={TabNavigator} options={{gestureDirection: 'vertical' }} />

        </Stack.Navigator>
  
   
    </NavigationContainer>

  )

}

export default function App() {


  return (
  
      <View  style={styles.container} >

   
    <LinearGradient
    colors={['#000000', '#000000bb', 'rgba(35, 32, 32, 0.447)', '#000000']}
    style={styles.gradient}
    start={{ x: 0, y: 1}}
    end={{ x: 0, y: 0 }}
    >
    <AppNavigator/>

    </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
    paddingTop: 40,

    position: 'relative',
    
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  navContainer:{
       flex: 1,
      backgroundColor: 'transparent'

  },
  layout1: {
    // backgroundColor: "pink",
    paddingTop: 50
  },
  layout2: {
    // backgroundColor: "green",
    flex: 1,

  }, 
  layout3: {
    backgroundColor: "orange",
    position: "absolute", 
    top: "90%",
    left: "78%",
    width: "14%", 
    height: "7%",
   
  },
  tabBar: {
    // backgroundColor: 'grey', // Customize the background color
   
    height: 100, 
    borderTopWidth: 0,
    borderBlockColor: "grey",
    backgroundColor: 'transparent', // Ensure tab bar is transparent to show the gradient
 
  },


});
