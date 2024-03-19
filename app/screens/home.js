import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffff",
      }}
    >
      <Image
        style={{ width: "auto" }}
        source={require("../assets/banner.png")}
      />
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 40,
          marginTop: -25,
          backgroundColor: "#ffff",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Schedule App
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#0A5091",
            padding: 12,
            margin: 30,
            display: "flex",
            gap: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("TodaySchedule")}
        >
          <MaterialIcons name="schedule" size={24} color="white" />
          <Text style={{ color: "#ffff", fontWeight: "bold" }}>
            Schedule Today
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0A5091",
              padding: 20,
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Schedule")}
          >
            <Entypo name="calendar" size={35} color="white" />
            <Text style={{ fontSize: 10, color: "#ffff", fontWeight: "bold" }}>
              Schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0A5091",
              padding: 20,
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("ListSchedule")}
          >
            <FontAwesome name="list-alt" size={35} color="white" />
            <Text style={{ fontSize: 10, color: "#ffff", fontWeight: "bold" }}>
              List
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
