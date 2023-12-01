import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import cscolor from "../data/const/colourconst";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
const Dashboard = ({ navigation }) => {
  const listoftab = ["All", "Cappuccino", "Espresso", "Americano", "Macchiato"];

  const listofdata1 = [
    {
      id: "1",
      title: "Cappuccino 1",
      sub_title: "With Steamed Milk 1",
      price: "14.20",
      imageUrl: require("../../assets/cup1.png"),
    },
    {
      id: "2",
      title: "Cappuccino 2",
      sub_title: "With Steamed Milk 2",
      price: "54.21",
      imageUrl: require("../../assets/cup2.png"),
    },
    {
      id: "3",
      title: "Cappuccino 3",
      sub_title: "With Steamed Milk 3",
      price: "45.22",
      imageUrl: require("../../assets/cup1.png"),
    },
    {
      id: "4",
      title: "Cappuccino 4",
      sub_title: "With Steamed Milk 4",
      price: "41.23",
      imageUrl: require("../../assets/cup2.png"),
    },
    {
      id: "5",
      title: "Cappuccino 5",
      sub_title: "With Steamed Milk 5",
      price: "5.24",
      imageUrl: require("../../assets/cup1.png"),
    },
    {
      id: "6",
      title: "Cappuccino 6",
      sub_title: "With Steamed Milk 6",
      price: "15.24",
      imageUrl: require("../../assets/cup2.png"),
    },
  ];

  const listofdata2 = [
    {
      id: "1",
      title: "Cappuccino 1",
      sub_title: "With Steamed Milk 1",
      price: "14.20",
      imageUrl: require("../../assets/coffee.png"),
    },
    {
      id: "2",
      title: "Cappuccino 2",
      sub_title: "With Steamed Milk 2",
      price: "54.21",
      imageUrl: require("../../assets/coffee2.png"),
    },
    {
      id: "3",
      title: "Cappuccino 3",
      sub_title: "With Steamed Milk 3",
      price: "45.22",
      imageUrl: require("../../assets/coffee.png"),
    },
    {
      id: "4",
      title: "Cappuccino 4",
      sub_title: "With Steamed Milk 4",
      price: "41.23",
      imageUrl: require("../../assets/coffee2.png"),
    },
    {
      id: "5",
      title: "Cappuccino 5",
      sub_title: "With Steamed Milk 5",
      price: "5.24",
      imageUrl: require("../../assets/coffee.png"),
    },
    {
      id: "6",
      title: "Cappuccino 6",
      sub_title: "With Steamed Milk 6",
      price: "15.24",
      imageUrl: require("../../assets/coffee2.png"),
    },
  ];

  const [selected, setselected] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: cscolor.dark,
        paddingTop: 16.0,
      }}
    >
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16.0,
        }}
      >
        <View
          style={{
            borderRadius: 120.0,
            backgroundColor: cscolor.bluedark,
            borderRadius: 12,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: cscolor.greydark,
          }}
        >
          <MaterialCommunityIcons
            style={{ margin: 12.0, color: cscolor.greydark }}
            name="view-grid"
            size={18}
          />
        </View>
        <View
          style={{
            borderTopLeftRadius: 12.0,
            borderTopRightRadius: 12.0,
            borderBottomLeftRadius: 12.0,
            borderBottomRightRadius: 12.0,
            height: 42,
            width: 42,
            overflow: "hidden",
            backgroundColor: cscolor.bluedark,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={require("../../assets/man.jpg")}
          />
        </View>
      </View>
      <Text
        style={{
          width: "70%",
          color: cscolor.white,
          fontSize: 32,
          marginTop: 32.0,
          fontFamily: "Poppins-Bold",
          lineHeight: 42,
          marginBottom: 32.0,
          paddingHorizontal: 16.0,
        }}
      >
        Find the best coffee for you
      </Text>

      <View
        style={{
          flexDirection: "row",
          borderRadius: 18.0,
          backgroundColor: cscolor.bluedark,
          paddingVertical: 6.0,
          paddingHorizontal: 8.0,
          marginHorizontal: 8.0,
          overflow: "hidden",
        }}
      >
        <FontAwesome
          style={{ margin: 12.0, color: cscolor.greydark }}
          name="search"
          size={18}
        />

        <TextInput
          style={{
            fontSize: 16,
            color: cscolor.white,
            paddingHorizontal: 8.0,
            marginEnd: 64.0,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={cscolor.greydark}
        />
      </View>
      <View style={{ marginTop: 16.0 }}>
        <ScrollView horizontal>
          {listoftab.map((text, index) => (
            <Pressable
              key={index}
              style={{ alignItems: "center" }}
              onPress={() => {
                setselected(index);
              }}
            >
              <Text
                style={{
                  color: selected == index ? cscolor.primary : cscolor.greydark,
                  fontSize: 18.0,
                  fontFamily: "Poppins-Bold",
                  paddingHorizontal: 8.0,
                }}
              >
                {text}
              </Text>
              {selected == index && (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 10.0,
                    backgroundColor: cscolor.primary,
                    marginTop: 8.0,
                  }}
                ></View>
              )}
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={listofdata1}
        keyExtractor={(item) => item.id}
        horizontal
        style={{
          marginTop: 16.0,
        }}
        renderItem={({ item }) => {
          return (
          <Pressable onPress={()=>navigation.navigate('productdetailpage')}  >
              <LinearGradient
              colors={["#252A32", "rgba(38, 43, 51, 0.00)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 180,
                height: 310,
                borderRadius: 24.0,
                marginHorizontal: 8.0,
              }}
            >
              <View>
                <View>
                  <View
                    style={{
                      height: 140,
                      borderRadius: 24.0,
                      margin: 16.0,
                      backgroundColor: cscolor.primary,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "cover",
                      }}
                      source={item.imageUrl}
                    />

                    <View
                      style={{
                        position: "absolute",
                        height: 110,
                        width: 80,
                        backgroundColor: cscolor.black,
                        opacity: 0.4,
                        right: 0,
                        top: -80,
                        borderBottomLeftRadius: 180.0,
                      }}
                    ></View>
                    <View
                      style={{
                        position: "absolute",
                        right: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 2.0,
                      }}
                    >
                      <MaterialCommunityIcons
                        style={{ color: cscolor.primary }}
                        name="star"
                        size={18}
                      />

                      <Text
                        style={{
                          fontSize: 16.0,
                          fontFamily: "Poppins-Bold",
                          paddingHorizontal: 4.0,
                          color: cscolor.white,
                        }}
                      >
                        4.5
                      </Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={{
                    color: cscolor.white,
                    fontSize: 20,
                    fontFamily: "Poppins-Regular",
                    marginTop: 8.0,
                    paddingHorizontal: 8.0,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: cscolor.white,
                    fontSize: 14,
                    fontFamily: "Poppins-Regular",
                    marginTop: 12.0,
                    paddingHorizontal: 8.0,
                  }}
                >
                  {item.sub_title}
                </Text>

                <View
                  style={{
                    marginTop: 12.0,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 8.0,
                  }}
                >
                  <Text
                    style={{
                      color: cscolor.white,
                      fontSize: 24,
                      fontFamily: "Poppins-Bold",
                    }}
                  >
                    <Text
                      style={{
                        color: cscolor.primary,
                        fontSize: 24,
                        fontFamily: "Poppins-Bold",
                      }}
                    >
                      $
                    </Text>{" "}
                    {item.price}
                  </Text>

                  <View
                    style={{
                      borderRadius: 120.0,
                      backgroundColor: cscolor.primary,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: cscolor.primary,
                    }}
                  >
                    <MaterialIcons
                      style={{ margin: 12.0, color: cscolor.white }}
                      name="add"
                      size={18}
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
          );
        }}
      />
      <Text
        style={{
          color: cscolor.white,
          fontSize: 22,
          fontFamily: "Poppins-Regular",
          paddingHorizontal: 16.0,
          marginVertical: 8.0,
        }}
      >
        Coffee beans
      </Text>

      <FlatList
        data={listofdata2}
        keyExtractor={(item) => item.id}
        horizontal
        style={{
          marginTop: 16.0,
        }}
        renderItem={({ item }) => {
          return (
       <Pressable  onPress={()=>navigation.navigate('productdetailpage')}>
             <LinearGradient
              colors={["#252A32", "rgba(38, 43, 51, 0.00)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 180,
                height: 310,
                borderRadius: 24.0,
                marginHorizontal: 8.0,
              }}
            >
              <View>
                <View>
                  <View
                    style={{
                      height: 140,
                      borderRadius: 24.0,
                      margin: 16.0,
                      backgroundColor: cscolor.primary,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        height: "100%",
                        width: "100%",
                        resizeMode: "cover",
                      }}
                      source={item.imageUrl}
                    />
                  </View>
                </View>

                <Text
                  style={{
                    color: cscolor.white,
                    fontSize: 20,
                    fontFamily: "Poppins-Regular",
                    marginTop: 8.0,
                    paddingHorizontal: 8.0,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: cscolor.white,
                    fontSize: 14,
                    fontFamily: "Poppins-Regular",
                    marginTop: 12.0,
                    paddingHorizontal: 8.0,
                  }}
                >
                  {item.sub_title}
                </Text>

                <View
                  style={{
                    marginTop: 12.0,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 8.0,
                  }}
                >
                  <Text
                    style={{
                      color: cscolor.white,
                      fontSize: 24,
                      fontFamily: "Poppins-Bold",
                    }}
                  >
                    <Text
                      style={{
                        color: cscolor.primary,
                        fontSize: 24,
                        fontFamily: "Poppins-Bold",
                      }}
                    >
                      $
                    </Text>{" "}
                    {item.price}
                  </Text>

                  <View
                    style={{
                      borderRadius: 120.0,
                      backgroundColor: cscolor.primary,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: cscolor.primary,
                    }}
                  >
                    <MaterialIcons
                      style={{ margin: 12.0, color: cscolor.white }}
                      name="add"
                      size={18}
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
       </Pressable>
          );
        }}
      />



</ScrollView>



    </SafeAreaView>
  );
};

export default Dashboard;
