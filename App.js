import Home from "./app/screens/home";
import Schedule from "./app/screens/schedule";
import TodaySchedule from "./app/screens/todaySchedule";
import ListSchedule from "./app/screens/listSchedule";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: "#0A5091" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TodaySchedule"
          component={TodaySchedule}
          options={{ title: "Today" }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{ title: "My Schedule" }}
        />
        <Stack.Screen
          name="ListSchedule"
          component={ListSchedule}
          options={{ title: "List Schedule" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
