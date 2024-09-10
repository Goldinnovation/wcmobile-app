import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './navigation/exploreScreen';
import FavorScreen from './navigation/favorScreen';
import LoginScreen from './navigation/loginScreen';
import UserInterestScreen from './navigation/interestScreen';
import ExploreFilter from './component/Main_Component/exposeFilter';
import { useState } from 'react';
import ExploreEventFilter from './icons/ExploreEventFilter';
import SettingIcon from './icons/settingIcon';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
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

  const [filter, setFilter] = useState(false)
  const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);



  const handleClickFilterExplore = () => {
    // console.log('Hello');
    setFilter(!filter)
  }

  const handleCloseClick = () => {
    setFilter(!filter)
  }


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
        headerLeft: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Worthsec"
            color="white"
          />
        ),
        headerRight: () => (
          <TouchableOpacity style={{
          //  backgroundColor:  filter ?  "pink" : "red",
            width:  30,
            // display: filter ? "flex" : "flex",
            height: 30,
            alignItems: "center",
            marginRight: categoryLayoutState ? 9 : 7,
             // gap: 15,
            justifyContent: "center",
            flexDirection: "row"
          }}>     
          <View style={{
           
           }}>
            {
               filter && (
                <View>
                     <ExploreFilter callFIlter={filter}  onClose={handleCloseClick}/>


                   
                </View>

               )
            }
             

           </View>
           
          <TouchableWithoutFeedback  
          style={{
            position: "relative",
            // top: 1,
            flexDirection: filter ? "row" : "column",
            // backgroundColor: "skyblue"
          }}
          onPress={() => handleClickFilterExplore()}>
            
          {/* <Image
          source={require("./assets/fi1.png")}
          style={{height: 30, width: 30}}
          /> */}
          <View>
          <ExploreEventFilter width={'30'} height={'30'} />
          </View>
           
             
          </TouchableWithoutFeedback>  
            
      

          </TouchableOpacity>
        ),
        
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
        headerLeft: () => (
          <TouchableOpacity style={{
          //  backgroundColor: "pink",
           width:  50,           
           alignItems: "center",
            justifyContent: "center",
            height: 50,
            flexDirection: "row",
            position:"relative", 
            left: 5,
            top: 3

          }}>
             {/* <Image
          source={require("./assets/bb1.png")}
          style={{height: 20, width: 20,}}
          /> */}

          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{
            // backgroundColor: "pink",
            width: 60,
            height: 30,
            alignItems: "center",
            marginRight: 13,
            gap: 15,
            justifyContent: "center",
            flexDirection: "row"
          }}>     
          <TouchableOpacity  
          style={{
            position: "relative",
            top: 1
          }}
          onPress={() => alert('This is a selection!')}>
          {/* <Image
          source={require("./assets/fi1.png")}
          style={{height: 28, width: 28}}
          /> */}
          <ExploreEventFilter width={'30'} height={'30'} />

          </TouchableOpacity>    
          
         <TouchableOpacity  onPress={() => alert('This is a kalender!')}>
         {/* <Image
          source={require("./assets/k2.png")}
          style={{height: 22, width: 22}}
          /> */}
          <SettingIcon width={'22'} height={'22'} />
         </TouchableOpacity>
        

          </TouchableOpacity>
        ),
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
  
    <Provider store={store} >
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
    </Provider>
    
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
