import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";


interface eventProps {
    eventId: string;
    eventHost: string;
     eventHostName: string,
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
  

interface CategoryDataProps {
    data: eventProps[]
    index: number
    handleSelectedEvent: (categoryItem: eventProps, index: number, eventId: string) => void

}


const EventCategoryFetchedData: React.FC<CategoryDataProps> = ({data, index, handleSelectedEvent}) => {

    const categoryData = data


    return(
        <View>
             {categoryData ? (
                        <ScrollView
                          horizontal={true}
                          style={{
                            height: 130,
                            // backgroundColor: "purple",
                            flexDirection: "row",
                            // marginTop: 5,
                            // gap: 45,
                            padding: 6,
                            position: "relative",
                            top: "-5%",
                            // width: "100%",
                          }}
                        >
                          
                          <View
                            style={{
                              // backgroundColor: "orange",
                              width: "100%",
                              display: "flex",
                              // flexDirection: "row"
                              flexDirection: "row",
                              gap: 13,
                            }}
                          >
                            {/* <Text>asasd</Text> */}
                            {categoryData.map((categoryItem, categoryindex) => (
                              <View
                                key={categoryindex}
                                style={
                                  {
                                    // backgroundColor: "red"
                                  }
                                }
                              >
                                <TouchableOpacity
                                  onPress={(e) =>
                                    handleSelectedEvent(
                                      categoryItem,
                                      index,
                                      categoryItem.eventId
                                    )
                                  }
                                >
                                  <Image
                                    source={{
                                      uri: categoryItem.ImageCoverUpload,
                                    }}
                                    style={{
                                      width: 110,
                                      height: 100,

                                      borderRadius: 9,
                                    }}
                                  />
                                  <View
                                    style={
                                      {
                                        // backgroundColor: "pink",
                                      }
                                    }
                                  >
                                    <Text
                                      style={{
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 7,
                                        marginTop: 7,
                                      }}
                                    >
                                      {categoryItem.eventTitle}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            ))}
                          </View>
                        </ScrollView>
                      ) : (
                        <Text>loading</Text>
                      )}


        </View>
    )
}


export default EventCategoryFetchedData