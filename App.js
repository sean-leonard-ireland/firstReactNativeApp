import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import EventList from "./EventList";
import EventForm from "./EventForm";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Your Events" component={EventList} />
        <Stack.Screen name="EventForm" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
