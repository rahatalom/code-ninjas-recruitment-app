import React from "react";
import { DefaultTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screens/SignInScreen";
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from "../screens/AboutScreen";
import ConfirmDetailsScreen from "../screens/ConfirmDetailsScreen";
import PreviewScreen from "../screens/PreviewScreen";
import FormScreen from "../screens/FormScreen";

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >

        <Stack.Screen
          name="Home"
          component={AboutScreen}
          options={
              {
                headerStyle: {
                  // backgroundColor: "#00303f",
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: "center",
                },
              }
          }
        />

        <Stack.Screen
          name="Confirm Details"s
          component={ConfirmDetailsScreen}
          options={
              {
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      marginLeft: 45,
                  },
              }
          }
        />

        <Stack.Screen
          name="Assessment Adjustments"
          component={FormScreen}
          options={
              {
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      marginLeft: 5,
                  },
              }
          }
        />

        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={
              {
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      marginLeft: 80,
                  },
              }
          }
        />

        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={
              {
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      marginLeft: 75,
                  },
              }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
