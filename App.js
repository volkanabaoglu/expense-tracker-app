import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import { GlobalStyles } from './src/constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: '#fff',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: { color: GlobalStyles.colors.accent500 },
    }}>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <>

      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
    
          <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={{headerShown:false}}  />
          <Stack.Screen name="MangeExpense" component={ManageExpense} />

        </Stack.Navigator>
      </NavigationContainer>

    </>

  );
}

