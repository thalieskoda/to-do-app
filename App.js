import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./components/Profile";
import Homepage from "./components/Homepage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TaskMate"
          component={Homepage}
          options={{
            headerStyle: { backgroundColor: "lightWhite" },
            headerShadowVisible: false,
            headerLeft: () => (
              <Text style={styles.headerTitle}>TaskMate</Text>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.headerButton}>Profile</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  }
});

export default App;
