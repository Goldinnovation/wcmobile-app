import { View, TouchableOpacity, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

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

interface eventDetailsProps {
  data: eventProps;
  state: {
    eventDescription: boolean;
    eventDetails: boolean;
    eventSound: boolean;
    eventOptionHeader: string;
  };
}

const EventDetailsSection: React.FC<eventDetailsProps> = ({ data, state }) => {
  const item = data;
  const redstate = state;
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );

  return (
    <View
      style={{
        // backgroundColor: "green",
        height: 350,
      }}
    >
      <View
        style={{
          //  backgroundColor: "pink",
          height: categoryLayoutState === item.eventId ? 90 : 289,
        }}
      >
        <View
          style={{
            // backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            // padding: 4,
            height: categoryLayoutState === item.eventId ? 68 : 58,
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
              height: categoryLayoutState === item.eventId ? 40 : 40,
              alignItems: "center",
              flexDirection: "row",
              padding: 3,
              borderTopWidth: 1,
              borderTopColor: "rgba(255, 255, 255,0.5)",
              borderBottomWidth: 1,
              borderBottomColor: "rgba(255, 255, 255,0.5)",
            }}
          >
            <View
              style={{
                // backgroundColor: "red",
                width: "75%",
                flexDirection: "row",
                height: categoryLayoutState === item.eventId ? 40 : 40,
                alignItems: "center",
                borderRightWidth: 1,
                borderRightColor: "rgba(255, 255, 255,0.5)",
                padding: 3,
              }}
            >
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
                marginLeft: 6,
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
              borderBottomColor: "rgba(255, 255, 255,0.5)",
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
                gap: 4,
              }}
            >
              <View
                style={
                  {
                    //  backgroundColor: "orange",
                  }
                }
              >
                <Image
                  source={require("../../../assets/ci.png")}
                  style={{
                    width: 15,
                    height: 15,
                    // borderRadius: 100,
                  }}
                />
              </View>
              <View
                style={{
                  //  backgroundColor: "green",

                  display: "flex",
                  flexWrap: "wrap",
                  width: "70%",
                  position: "relative",
                  left: "-10%",
                }}
              >
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
                <View
                  style={{
                    //  backgroundColor: "pink",
                    marginLeft: 7.1,
                  }}
                >
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
                    borderColor: "aqua",
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
        </View>
      </View>
    </View>
  );
};

export default EventDetailsSection;
