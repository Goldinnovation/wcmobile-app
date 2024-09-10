import React from 'react'
import { View, Image, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import EventDetailsSection from './eventDetailsSection';

interface eventProps {
    eventId: string;
    eventHost: string;
    eventHostName: string;
    eventTitle: string;
    eventDate: string;
    eventType: string;
    eventDescriptionContent: string;
    eventTime: string;
    ImageCoverUpload: string;
    eventInviteType: number;
    eventAddress: string;
    eventZipcode: string;
    cityType: string;
    selectedRangeofEvents: number;
  }


  interface seconSlideContentProps {
    data: eventProps;
    state: {
        eventDescription: boolean; 
        eventDetails: boolean; 
        eventSound: boolean; 
        eventOptionHeader: string; 
    }; 
   
  }

  


const  EventSecondSlideContent: React.FC<seconSlideContentProps> = ({data, state}) => {
    const item = data
    const redstate = state
    const { categoryLayoutState } = useSelector((state: RootState) => state.OpenCategoryLayout);

  return (
    <View
            style={{
              // backgroundColor: "pink",
              height: 190,
            }}
          >
          
            <View style={{
                 position: "absolute",
               
                 zIndex: 3,
                 top: categoryLayoutState === item.eventId ? "64%" : "490%",
                 left: categoryLayoutState === item.eventId ? "2%" : "5%",

              }}>

              </View>
         
            {/* Event Description Area Header */}
            <View>
            <View style={{
                 backgroundColor:
                 categoryLayoutState === item.eventId
                   ? "rgba(20,20,20,0.4)"
                   : "rgba(20,20,20,0.4)",
               position: "absolute",
              //  display:categoryLayoutState === item.eventId ? "none" : "flex",
               width: categoryLayoutState === item.eventId ? 350  : 358,
               height: categoryLayoutState === item.eventId ? 80 : 90,
              // borderBottomWidth: 1,
              borderColor: "rgba(255, 255, 255,0.5)",
              borderTopLeftRadius: 9,
              borderTopRightRadius: 9,
               zIndex: 1
              }}>


            </View>
            <Image
                    source={{ uri: item.ImageCoverUpload }}
                    style={{
                      width: categoryLayoutState === item.eventId ? 350.6 : 358,
                      // height: 490,
                      
                      height: categoryLayoutState === item.eventId ? 80 : 90,
                      borderTopLeftRadius: 9,
                      borderTopRightRadius: 9,
                      borderBottomWidth: 1,
                      borderColor: "rgba(255, 255, 255,0.9)"
                      //  paddingRight: 30,
                    }}
                  />


            </View>
                 
            {/* Event Description Area */}
                { redstate.eventDescription && (
                  <EventDetailsSection data={item}  state={redstate}/>
              )}

              {
                redstate.eventDetails && (
                  <View>
                     <View
                  style={{
                    // backgroundColor: "green",
                    height: 350,
                  }}
          >
          

            <View
              style={{
                //  backgroundColor: "pink",
                height: categoryLayoutState === item.eventId ?  90 : 289,
                // padding: 9,
                // margin: 5,
                // marginTop: 33
                //  marginLeft: 1
                //  borderTopWidth: 1,
                //  borderTopColor: "rgba(255, 255, 255,0.9)"
              }}
            >
              <View
              style={{
                // backgroundColor: "grey",
                justifyContent: "center",
                alignItems: "center",
                // padding: 4,
                height:categoryLayoutState === item.eventId ? 68: 58,
                // flexDirection: "column"
                  //   borderBottomWidth: 1,
                  // borderColor: "rgba(255, 255, 255,0.5)"
              }}
            >
              <View
                style={{
                  // backgroundColor: "green",
                  // borderRadius: 50,
                  // borderColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  // marginTop: 15,
                  // height: 2,
                  
                  // borderWidth: 1, 
                  // 
                  // borderBottomWidth: 1,
                  // borderColor: "white"
                  // overflow: "visible",
                }}
              >
                
                <Text
                  style={{
                    color: "rgba(221,221,221,0.8)",
                    fontSize: 28,
                    // position: "absolute",
                    // top: -17
                    // textAlign: "center",
                  }}
                >
                 {redstate.eventOptionHeader} 
                </Text>

                
               
                {/* <Image
                      source={require("../../assets/a1.png")}
                      style={{
                        width: 43,
                        height: 43,
                        // borderRadius: 100,
                      }}
                    /> */}
              </View>
            </View>

              {/* Total section - Details */}
                <View
                  style={{
                    gap: 4,
                  }}
                >

                 {/* Date section - Details */}

                  <View
                    style={{
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      height:categoryLayoutState === item.eventId ? 40 : 40,
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 3,
                      borderTopWidth: 1,
                      borderTopColor: "rgba(255, 255, 255,0.5)",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(255, 255, 255,0.5)"
                    }}
                  >

                    <View style={{
                      // backgroundColor: "red", 
                      width: "75%",
                      flexDirection: "row",
                      height: categoryLayoutState === item.eventId ? 40 :40,
                      alignItems: "center",
                      borderRightWidth: 1, 
                      borderRightColor: "rgba(255, 255, 255,0.5)",
                      padding: 3,


                    }}> 
                    <Image
                      source={require("../../../assets/k2.png")}
                      style={{
                        width: 13,
                        height: 13,
                        // borderRadius: 100,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      {"  "}
                      {item.eventDate}
                    </Text>


                    </View>
                   

                      {/* Time section - Details */}
                    <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                      width: "26%",
                      marginLeft: 6
                      // borderBottomWidth: 1,
                      // borderBottomColor: "rgba(255, 255, 255,0.5)",
                    }}
                  >
                    <Image
                      source={require("../../../assets/t1.png")}
                      style={{
                        width: 13,
                        height: 13,
                        // borderRadius: 100,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        // marginLeft: 6
                      }}
                    >
                      {"  "}
                      {item.eventTime}
                    </Text>
                  </View>
                  </View>

              

                 

                  {/* Weather seciton-Details  */}

                  <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(255, 255, 255,0.5)",
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "red",
                        width: "30%",
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        source={require("../../../assets/wo1.png")}
                        style={{
                          width: 15,
                          height: 15,
                          // borderRadius: 100,
                        }}
                      />
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        {"  "}
                        22C
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "green",
                        width: "20%",
                        flexDirection: "row",
                        height: 30,
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../../assets/tsh1.png")}
                          style={{
                            width: 20,
                            height: 20,
                            // borderRadius: 100,
                          }}
                        />
                      </View>
                      <View>
                        <Image
                          source={require("../../../assets/sli1.png")}
                          style={{
                            width: 25,
                            height: 25,
                            // borderRadius: 100,
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Payment section - Details */}
                  <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(255, 255, 255,0.5)"
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "red",
                        width: "30%",
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        source={require("../../../assets/e1.png")}
                        style={{
                          width: 15,
                          height: 15,
                          // borderRadius: 100,
                        }}
                      />
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        {"  "}
                        15€
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "green",
                        width: "30%",
                        flexDirection: "row",
                        height: 30,
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../../assets/bc1.png")}
                          style={{
                            width: 20,
                            height: 20,
                            // borderRadius: 100,
                          }}
                        />
                      </View>
                      <View>
                        <Image
                          source={require("../../../assets/fn2.png")}
                          style={{
                            width: 25,
                            height: 25,
                            // borderRadius: 100,
                          }}
                        />
                      </View>
                      <View>
                        <Image
                          source={require("../../../assets/py1.png")}
                          style={{
                            width: 25,
                            height: 25,
                            // borderRadius: 100,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                 
                 {/* Card - Addresse and City */}
                  <View
                    style={{
                      flexDirection: "row",
                      height: 57,
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                      justifyContent: "space-between",
                      borderBottomWidth: categoryLayoutState === item.eventId ? 0 : 1,
                      borderBottomColor:"rgba(255, 255, 255,0.5)"
                      
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "red",
                        width: "70%",
                        // flexWrap: "wrap",
                        height: 43,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4
                       
                        
                      }}
                    >
                      <View style={{
                        //  backgroundColor: "orange",

                      }}>
                         <Image
                        source={require("../../../assets/ci.png")}
                        style={{
                          width: 15,
                          height: 15,
                          // borderRadius: 100,
                        }}
                      />
                      </View>
                      <View  style={{
                        //  backgroundColor: "green",
                        
                         display:"flex",
                         flexWrap: "wrap",
                         width: "70%",
                         position: "relative",
                         left: "-10%"

                      }}>
                        <View>
                        <Text
                        style={{
                          color: "white",
                         
                        }}
                      >
                        {"  "}
                        {item.eventAddress}, {item.eventZipcode}
                        
                         
                      </Text>
                        </View>
                        <View style={{
                          //  backgroundColor: "pink",
                           marginLeft: 7.1
                        
                        }}>
                        <Text
                        style={{
                          color: "white",
                         
                        }}
                      >
                       
                        
                         {item.cityType}
                      </Text>

                        </View>
                     

                      </View>
                     
                     
                    </View>
                    <View
                      style={{
                        // backgroundColor: "green",
                        width: "20%",
                        flexDirection: "row",
                        height: 30,
                        gap: 10,
                        alignItems: "center",
                        position: "relative",
                        top: "0%",
                        left: "-5%",
                    
                      }}
                    >
                     
                      <View>
                        <Image
                          source={require("../../../assets/im.jpg")}
                          style={{
                            width: 75,
                            height: 45,
                            borderRadius: 9,
                            borderWidth: 1,
                            borderColor: "aqua"
                          }}
                        />
                      </View>
                    </View>
                  </View>



                  {/* Team section - Details */}

                  <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      display: categoryLayoutState === item.eventId ? "none" : "flex",
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                      // borderBottomWidth: 1,
                      // borderBottomColor: "white",
                    }}
                  >
                    <Image
                      source={require("../../../assets/al1.png")}
                      style={{
                        width: 15,
                        height: 15,
                        // borderRadius: 100,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      {"  "}
                      Plan:
                    </Text>
                   
                  </View>

                  {/* <View style={{
                    // backgroundColor: "red",
                    height: 65,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // flexWrap: "wrap"
                  }}>
                    <View>
                      <Image
                          source={require("../../assets/profileImg/1.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                        <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                        </View>
                    <View>
                    <Image
                          source={require("../../assets/profileImg/2.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                      <Text style={{color:"white",textAlign: "center", fontSize: 8,marginTop: 5 }}>Music</Text>

                    </View>
                    <View>
                    <Image
                          source={require("../../assets/profileImg/3.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                       <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Light</Text>

                    </View>
                    
                    <View>
                    <Image
                          source={require("../../assets/profileImg/5.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                      <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Sound</Text>

                    </View>
                    <View>
                    <Image
                          source={require("../../assets/profileImg/6.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                     <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                    </View>


                  </View> */}



                  
                </View>
             

              
            </View>
            
          </View>

                  </View>
                )
              }

              { redstate.eventSound && (
                <View style={{   
                }}>
                  {/* Host Image */}
                   <View
                  style={{
                    // backgroundColor: "red",
                    height: 80,
                    // marginTop: 65,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    position:"relative",
                    top:  categoryLayoutState === item.eventId ? "1%" : "15%",
                    zIndex: 2
                  }}
                >
                  <Image
                    source={require("../../../assets/profileImg/2.jpg")}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      position:"absolute",
                      zIndex: 2
                    
                    }}
                  />
                  </View>

                  {/* Username Area - eventSound */}
                  <View
                  style={{
                    //  backgroundColor: "orange",
                    height: 40,

                    //  flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position:"relative",
                    top:  categoryLayoutState === item.eventId ? "1%" : "18%"
                  }}
                >
                  <View
                    style={{
                      // backgroundColor: "green",
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 25,
                        // textAlign: "center"
                      }}
                    >
                      {item.eventHostName}
                    </Text>
                  </View>
                
              
                </View> 
                {/* Artist Deatils Section - eventSound */}
                 <View
                style={{
                  // backgroundColor: "green",
                  height: 135,
                  position:"relative",
                  top:  categoryLayoutState === item.eventId ? "1%" : "-7%"
                }}
              >
                <View
                  style={{
                    // backgroundColor: "grey",
                    // justifyContent: "center",
                    padding: 4,
                    height: 38,
                  }}
                >
                  <View
                    style={{
                      // backgroundColor: "rgba(240,240,240,1)",

                      // borderRadius: 50,
                      // borderColor: "white",
                      width: "12%",
                      // flexDirection: "row",
                      alignItems: "center",
                      gap: 30,
                      justifyContent: "center",
                      position: "relative", 
                      top:categoryLayoutState === item.eventId ? "1%" : "-208%",
                      left: categoryLayoutState === item.eventId ? "1%" : "86%"


                    
                      // overflow: "visible",
                    }}
                  >
                          <Image
                      source={require("../../../assets/sc1.png")}
                      style={{
                        width: 25,
                        height: 25,
                        // borderRadius: 100,
                      }}
                    />
                      <Image
                      source={require("../../../assets/ig1.png")}
                      style={{
                        width: 25,
                        height: 25,
                        // borderRadius: 100,
                      }}
                    />

                      <Image
                      source={require("../../../assets/ti1.png")}
                      style={{
                        width: 25,
                        height: 25,
                        // borderRadius: 100,
                      }}
                    />
                   
                  </View>
                </View>

                <View
                  style={{
                    //  backgroundColor: "pink",
                    height: categoryLayoutState === item.eventId ?  90 : 98,
                    padding: 9,
                    margin: 5,
                    //  marginLeft: 1
                    //  borderTopWidth: 1,
                    //  borderTopColor: "rgba(255, 255, 255,0.9)"
                  }}
                >
                  {redstate.eventDescription && (
                    <View
                      style={
                        {
                          //  backgroundColor: "green",
                          //  height: 130,
                        }
                      }
                    >
                      <View
                        style={{
                          //  backgroundColor: "skyblue",
                          //  overflow: "scroll",
                          height: 115,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                          }}
                        >
                          {item.eventDescriptionContent}
                        </Text>
                      </View>

                    
                    </View>
                  )}
                </View>
              
                </View> 

                {/* Artist selection Area - eventSound */}
                <View style={{
                  // backgroundColor: "orange",
                    position:"relative",
                        top:  categoryLayoutState === item.eventId ? "1%" : "-7%",
                      borderTopWidth: 1, 
                      borderTopColor: "white"
                }}>
                <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                      // backgroundColor: "rgba(203,203,203,0.5)",
                      alignItems: "center",
                      padding: 3,
                     
                      // borderBottomWidth: 1,
                      // borderBottomColor: "white",
                    }}
                  >
                    <Image
                      source={require("../../../assets/dj1.png")}
                      style={{
                        width: 15,
                        height: 15,
                        // borderRadius: 100,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      {"  "}
                      DJ:
                    </Text>
                   
                  </View>

                  <View style={{
                    // backgroundColor: "red",
                    height: 65,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // flexWrap: "wrap"
                  }}>
                    <View>
                      <Image
                          source={require("../../../assets/profileImg/1.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                        <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                        </View>
                    <View>
                    <Image
                          source={require("../../../assets/profileImg/2.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                      <Text style={{color:"white",textAlign: "center", fontSize: 8,marginTop: 5 }}>Music</Text>

                    </View>
                    <View>
                    <Image
                          source={require("../../../assets/profileImg/3.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                       <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Light</Text>

                    </View>
                    
                    <View>
                    <Image
                          source={require("../../../assets/profileImg/5.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                      <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Sound</Text>

                    </View>
                    <View>
                    <Image
                          source={require("../../../assets/profileImg/6.jpg")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 50,
                           
                          }}
                        />
                     <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                    </View>


                  </View>

                 
                </View>
              </View>
              )}
           
              
               
        
           </View>
  )
}

export default EventSecondSlideContent
