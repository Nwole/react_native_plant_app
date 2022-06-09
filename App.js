import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { Constants } from "expo-constants";
import HomeScreen from "./Components/Screens/HomeScreen";
import DetailScreen from "./Components/Screens/DetailScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0,0,0,0)" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
