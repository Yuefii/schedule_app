import { Text, View, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Schedule } from "./app/screens";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();
const screenOptions = {
  topBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    borderRadius: 40,
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={screenOptions}>
        <tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={focused ? styles.Focused : styles.Container}>
                  <MaterialIcons
                    name="schedule"
                    size={24}
                    color={focused ? "#fff" : "#111"}
                  />
                  {focused ? null : <Text style={styles.Text}>Schedule</Text>}
                </View>
              );
            },
          }}
        />
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={focused ? styles.Focused : styles.Container}>
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#fff" : "#111"}
                  />
                  {focused ? null : <Text style={styles.Text}>Home</Text>}
                </View>
              );
            },
          }}
        />
        <tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={focused ? styles.Focused : styles.Container}>
                  <Feather
                    name="user"
                    size={24}
                    color={focused ? "#fff" : "#111"}
                  />
                  {focused ? null : <Text style={styles.Text}>Profile</Text>}
                </View>
              );
            },
          }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Container: { alignItems: "center", justifyContent: "center" },
  Text: { fontSize: 12, color: "#16247d" },
  Focused: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16247d",
    width: Platform.OS == "ios" ? 50 : 50,
    height: Platform.OS == "ios" ? 50 : 50,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
  },
});

export default App;
