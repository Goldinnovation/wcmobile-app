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
// import ExploreFilter from './component/header_Component/exploreFilter';
import ExploreFilter from './component/header_Component/exploreFilterPageStructure';
import { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { profileLayoutUpdatePageAction } from './store/Actions/ProfileUpdateAction';
import DnaIcon from './icons/dnaIcon';
import FeedbackScreen from './navigation/feedBackScreen';
import MessageScreen from './navigation/messageScreen';
import NotificationScreen from './navigation/notificationScreen';
import UserScreen from './navigation/userScreen';
import SearchScreen from './navigation/searchScreen';
import FavorScreen from './navigation/favorScreen';
import ModeScreen from './navigation/modeScreen';
import { reloadAppAsync } from "expo";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GameIcon from './icons/gameIcon';
import WorldIcon from './icons/worldIcon';
import PlaybtnIcon from './icons/playIbtnIcon';





const MyTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    flex: 1,
    borderColor: "red"
  },
};

type RouteName = 'Profile' | 'ExploreContent' | "Connect" | "Map" ;

const icons: Record<RouteName, {focused: any; unfocused: any}> = {
  Profile: {
    focused: require('./assets/ag1.png'),
    unfocused: require('./assets/1ga.png')
  }, 

  ExploreContent: {

    focused: require('./assets/4.png'),
    unfocused: require('./assets/wind-rose.png')
  },

  Connect: {

    focused: require('./assets/qr1.png'),
    unfocused: require('./assets/qrg.png')
  },

  Map: {

    focused: require('./assets/gl1.png'),
    unfocused: require('./assets/gl2.png')
  },

  // Add: {

  //   focused: require('./assets/ad1.png'),
  //   unfocused: require('./assets/ad2.png')
  // }
}




function TabNavigator() {

  const [filter, setFilter] = useState(false)
  const [modeScreenToggle, setModeScreenToggle] = useState(false)
  const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatchProfilePage = useDispatch()
  const {profileState} = useSelector((state: RootState) => state.ProfilePageUpdate)





  const handleProfilePageUpdate = (e: string) => {

    dispatchProfilePage(profileLayoutUpdatePageAction(e))

  }

  const handleClickFilterExplore = () => {
    // console.log('Hello');
    setFilter(!filter)
  }

  const handleCloseClick = () => {
    setFilter(!filter)
  }

  const handleModeSceen = () => {
    console.log('triggert');
    setModeScreenToggle(!modeScreenToggle)
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
      
     {/* Explore Tab  */}
      <Tab.Screen 
      name='ExploreContent' 
      component={ExploreScreen}
      options={{
        title: 'Explore',
        headerLeft: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  199,
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: categoryLayoutState ? 9 : 7,
        
          }}>
            {/* Explore Mode Option */}
            
            <View style={{
              width:  scale(110),
            // height: 25,
            // borderWidth: 1,
            // borderColor: "rgba(249,249,249,0.9)",
            padding: 1,
            alignItems: "center",
            display: "flex", 
            borderRadius: 4,
            // justifyContent: "center", 
            flexDirection: "row",
            // backgroundColor: "green",


            }}
            //  onPress={() => navigation.push("ModeScreen")}
            >
             
              {/* <Text style={{color: "white", fontSize: 15, fontWeight: "bold", opacity: 0.7}}>MODE</Text> */}
                 <Image
                  source={require("./assets/emsfw.png")}
                  style={{
                    width: scale(90),
                    height: verticalScale(20),
                    // width: scale(110),
                    // height: verticalScale(26),
                    // borderRadius: 100,
                  }}
                />
             
              
             

             
               
              
            </View>

           
          </View>
        ),
        headerRight: () => (
          <View style={{
          //  backgroundColor:  filter ?  "pink" : "red",
            width:  135,
            // display: filter ? "flex" : "flex",
            height: 30,

            alignItems: "center",
            marginRight: categoryLayoutState ? 12 : 8,
             gap: 27,
            justifyContent: "flex-end",
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

          {/* Map button  */}
           {/* <TouchableOpacity  
          style={{
            position: "relative",
            // top: 1,
            flexDirection: filter ? "row" : "column",
            // backgroundColor: "skyblue"
          }}
          onPress={() => navigation.push("ModeScreen")}
          
          >
            
         
          <View>
      

          <PlaybtnIcon width={'24'} height={'24'}/>
          </View>
           
             
          </TouchableOpacity> */}

           {/* Filter button  */}
          <TouchableOpacity  
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
          <ExploreEventFilter width={'28'} height={'28'} />
          </View>
           
             
          </TouchableOpacity>  


            {/* Notification button */}
          <TouchableOpacity  onPress={() => navigation.push("NotificationScreen")}>
        
        {/* <SettingIcon width={'21'} height={'21'} /> */}
          <NotificationIcon  width={'24'} height={'24'} />
          </TouchableOpacity>
            
      

          </View>
        ),
        
        headerStyle: {
          backgroundColor: 'transparent',},
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>


      {/* Map Tab */}
     <Tab.Screen    
      name='Map'
      component={ModeScreen}
      options={{
        title: 'Map',
        
        headerRight: () => (
          <View style={{
            // backgroundColor: "pink",
            width: 150,
            height: 30,
            alignItems: "center",
            marginRight: 15,
            gap: 30,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}> 
         
         
             
          
         <TouchableOpacity  onPress={() => navigation.push("NotificationScreen")}>
        
          {/* <SettingIcon width={'21'} height={'21'} /> */}
          <NotificationIcon  width={'23'} height={'25'}  />
         </TouchableOpacity>

        

          </View>
        ),
         headerLeft: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  scale(119),
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: categoryLayoutState ? 9 : 7,
        
          }}>
            {/* Explore Mode Option */}
            
            <View style={{
              width:  scale(110),
            // height: 25,
            // borderWidth: 1,
            // borderColor: "white",
            padding: 1,
            // marginLeft: 15,

            // alignItems: "center",
            display: "flex", 
            borderRadius: 4,
            // justifyContent: "center", 
            flexDirection: "row",
            // backgroundColor: "green"

            }}
            >
            

              <Image
                  source={require("./assets/emsfw.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: scale(90),
                    height: verticalScale(20)
                    // borderRadius: 100,
                  }}
                />
            

             
               
              
            </View>

            
          </View>
        ),
        headerStyle: {
          backgroundColor: 'transparent',},
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>

    

      {/* SearchScreen Tab */}
      <Tab.Screen    
      name='Connect'
      component={SearchScreen}
      options={{
        title: 'Connect',
        
        headerRight: () => (
          <View style={{
            // backgroundColor: "pink",
            width: 150,
            height: 30,
            alignItems: "center",
            marginRight: 15,
            gap: 30,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}> 
         
         
             
          
         <TouchableOpacity  onPress={() => navigation.push("NotificationScreen")}>
        
          {/* <SettingIcon width={'21'} height={'21'} /> */}
          <NotificationIcon  width={'23'} height={'25'}  />
         </TouchableOpacity>

        

          </View>
        ),
         headerLeft: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  scale(119),
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: categoryLayoutState ? 9 : 7,
        
          }}>
            {/* Explore Mode Option */}
            
            <View style={{
              width:  scale(110),
            // height: 25,
            // borderWidth: 1,
            // borderColor: "white",
            padding: 1,
            // marginLeft: 15,

            // alignItems: "center",
            display: "flex", 
            borderRadius: 4,
            // justifyContent: "center", 
            flexDirection: "row",
            // backgroundColor: "green"

            }}
            >
            

              <Image
                  source={require("./assets/emsfw.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: scale(90),
                    height: verticalScale(20)
                    // borderRadius: 100,
                  }}
                />
            

             
               
              
            </View>

            
          </View>
        ),
        headerStyle: {
          backgroundColor: 'transparent',},
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>


      {/* Profile Tab */}
      <Tab.Screen    
      name='Profile'
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerLeft: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  199,
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: categoryLayoutState ? 9 : 7,
        
          }}>
            {/* Explore Mode Option */}
            
            <View style={{
              width:  scale(110),
            // height: 25,
            // borderWidth: 1,+
            // borderColor: "white",
            padding: 1,
            // marginLeft: 15,

            // alignItems: "center",
            display: "flex", 
            borderRadius: 4,
            // justifyContent: "center", 
            flexDirection: "row",
            // backgroundColor: "green"

            }}
            //  onPress={() => navigation.push("ModeScreen")}
            >
            
              {/* <Text style={{color: "white", fontSize: 15, fontWeight: "bold", opacity: 0.7}}>EMS</Text> */}

              <Image
                  source={require("./assets/emsfw.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: scale(90),
                    height: verticalScale(20)
                    // borderRadius: 100,
                  }}
                />
              
              {/* <View style={{
                 width:  "20%",
                 height: 20,
                //  backgroundColor: "green",
                 display: "flex", 
                justifyContent: "center", 
                flexDirection: "row",
                alignItems: "center",
                // borderLeftWidth: 1, 
                // borderLeftColor: "rgba(249,249,249,0.9)"
              }}>
                <View style={{
                  width:  "65%",
                  height: 10,
                  backgroundColor: "red",
                  borderRadius: 50,
                  opacity: 0.8
                }}>

                </View>
              </View> */}

             
               
              
            </View>

            
          </View>
        ),
        headerRight: () => (
          <View style={{
            // backgroundColor: "pink",
            width: 150,
            height: 30,
            alignItems: "center",
            marginRight: 15,
            gap: 30,
            justifyContent: "flex-end",
            flexDirection: "row"
          }}> 
         
         
             
          
         <TouchableOpacity  onPress={() => navigation.push("NotificationScreen")}>
        
          {/* <SettingIcon width={'21'} height={'21'} /> */}
          <NotificationIcon  width={'23'} height={'25'}  />
         </TouchableOpacity>

        

          </View>
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
  const { backgroundColorMask } = useSelector((state: RootState) => state.BackgroundReducer);

  useEffect(() => {
    console.log('triggert in nav');
    // reloadAppAsync()
  },[backgroundColorMask])
  //  const color1 = backgroundColorMask.color1
  const color2 = backgroundColorMask.color2
  const color3 = backgroundColorMask.color3
  const color4 = backgroundColorMask.color4

  console.log('backgroundColorMask', backgroundColorMask);


  return(
    <NavigationContainer  theme={MyTheme}>
     
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="interestScreeen" component={UserInterestScreen} />
            <Stack.Screen name="UserExploreScreen" component={TabNavigator} options={{gestureDirection: 'vertical' }} />
            <Stack.Screen name="settingScreen" component={SettingScreen}  />
            <Stack.Screen name="FeedbackScreen" component={FeedbackScreen}  options={{ presentation: "modal" }} />
            <Stack.Screen name="MessageScreen" component={MessageScreen}  options={{ presentation:  "modal"  }} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen}  /> 
            <Stack.Screen name="UserScreen" component={UserScreen}  options={{ presentation:  "transparentModal"  }}/>
            <Stack.Screen name="FavorScreen" component={FavorScreen}  />
            {/* <Stack.Screen name="ModeScreen" component={ModeScreen} options={{ presentation:    "transparentModal" }}  /> */}
            <Stack.Screen name="ModeScreen" component={ModeScreen}  />






        </Stack.Navigator>
  
   
    </NavigationContainer>

  )

}

export default function App() {
  // const { backgroundColorMask } = useSelector((state: RootState) => state.BackgroundReducer);

  const state = store.getState()
  const reducerCheck = state.BackgroundReducer
 console.log('reducerCheck', reducerCheck);
  const colorTheme = state.BackgroundReducer.backgroundColorMask
  console.log('test', colorTheme);
  const color1 = colorTheme.color1
  const color2 = colorTheme.color2
  const color3 = colorTheme.color3
  const color4 = colorTheme.color4

  console.log('color1app', reducerCheck);
  console.log('color2', color2);
  console.log('color3', color3);

  // useEffect(() => {
  //   console.log('triggert');
  // }, [reducerCheck])

  return (
  
    <Provider store={store} >
      
    <View  style={styles.container} >
    <LinearGradient
  
    // colors={['black']} //Infinity 
    // colors={['black','silver', 'purple', 'green']} //Bubble 
    // colors={['black','grey', '#000059', "black"]} //Nitro
    // colors={['black','brown', 'purple', "purple","black"]} //Nitro

    colors={[color1,color2, color3, color4]} //Nitro

    // colors={['#000000', '#000000bb', 'rgba(35, 32, 32, 0.447)', '#000000']} //Moon
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
