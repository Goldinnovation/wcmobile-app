import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from './navigation/exploreScreen';
import ProfileScreen from './navigation/profileScreen';
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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import SettingScreen from './navigation/settingScreen';
import Angel from './icons/ProfileIcon';
import FavorIcon from './icons/favorIcon';
import UserIconHeadMenu from './icons/userIconHeadMenu';
import MiniStar from './icons/miniStar';
import NotificationIcon from './icons/notificationIcon';
import InboxIcon from './icons/inboxIcon';







const MyTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    flex: 1,
    borderColor: "red"
  },
};

type RouteName = 'Profile' | 'ExploreContent';

const icons: Record<RouteName, {focused: any; unfocused: any}> = {
  Profile: {
    focused: require('./assets/ag1.png'),
    unfocused: require('./assets/1ga.png')
  }, 

  ExploreContent: {

    focused: require('./assets/4.png'),
    unfocused: require('./assets/wind-rose.png')
  }
}




function TabNavigator() {

  const [filter, setFilter] = useState(false)
  const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



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
        />
       },
    
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { ...styles.tabBar, },
      headerTitleStyle: {
        display: "none"
      },
    })}
   
 
    >
      
     
      <Tab.Screen 
      name='ExploreContent' 
      component={ExploreScreen}
      options={{
        title: 'Explore',
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
      name='Profile'
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <View style={{
            width: 50,
            // backgroundColor: "green",
            height: 30,
            marginLeft: 10,
            alignItems: "center",
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
          {/* <ExploreEventFilter width={'30'} height={'30'} /> */}
          <View style={{
            width: 20, 
            height: 20,
            position: "absolute",
            zIndex: 3,
            top: "52%",
            left: "60%",
            // backgroundColor: "yellow",
            borderRadius: 50,
            // borderWidth: 1, 
            // borderColor: "yellow"
            
          }}>
            <MiniStar  width={'12'} height={'12'} color='white' />
          </View>
          <UserIconHeadMenu width={'23'} height={'23'} color='white' /> 

          </TouchableOpacity>    

          </View>
         
        ),
        headerRight: () => (
          <TouchableOpacity style={{
            // backgroundColor: "pink",
            width: 150,
            height: 30,
            alignItems: "center",
            marginRight: 10,
            gap: 30,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}> 
         
         
             
          
         <TouchableOpacity  onPress={() => navigation.push("settingScreen")}>
        
          {/* <SettingIcon width={'21'} height={'21'} /> */}
          <NotificationIcon  width={'21'} height={'21'} />
         </TouchableOpacity>

         <TouchableOpacity  onPress={() => navigation.push("settingScreen")}>
        
        {/* <SettingIcon width={'21'} height={'21'} /> */}
        <InboxIcon  width={'22'} height={'22'} />
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
           <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="interestScreeen" component={UserInterestScreen} />
            <Stack.Screen name="UserExploreScreen" component={TabNavigator} options={{gestureDirection: 'vertical' }} />
            <Stack.Screen name="settingScreen" component={SettingScreen}  />


        </Stack.Navigator>
  
   
    </NavigationContainer>

  )

}

export default function App() {


  return (
  
    <Provider store={store} >
    <View  style={styles.container} >
    <LinearGradient
    colors={['black', '#000000bb', 'black']}
    // colors={['black', 'purple', 'black']}

    // colors={['black','orange','silver', 'purple', 'green']}

    // colors={['#000000', '#000000bb', 'rgba(35, 32, 32, 0.447)', '#000000']}
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
