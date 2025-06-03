import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';
import AddMovie from '../screens/AddMovie';
import EditMovie from '../screens/EditMovie';
import DeleteMovie from '../screens/DeleteMovie';
import Favorites from '../screens/Favorites';
import Login from '../screens/Login'; // 👈 Asegúrate de importar esta pantalla

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#e91e63',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => <Icon name="home-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="Add Movie"
        component={AddMovie}
        options={{
          drawerIcon: ({ color }) => <Icon name="add-circle-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="Edit Movie"
        component={EditMovie}
        options={{
          drawerIcon: ({ color }) => <Icon name="create-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="Delete Movie"
        component={DeleteMovie}
        options={{
          drawerIcon: ({ color }) => <Icon name="trash-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color }) => <Icon name="heart-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          drawerItemStyle: { display: 'none' },
          drawerIcon: ({ color }) => <Icon name="film-outline" size={22} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}

// ✅ Navegación principal con Login antes del Drawer
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
