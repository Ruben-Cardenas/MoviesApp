// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login'; // 👈 Nueva pantalla
import Home from './src/screens/Home';
import MovieDetails from './src/screens/MovieDetails';
import AddMovie from './src/screens/AddMovie';
import EditMovie from './src/screens/EditMovie';
import DeleteMovie from './src/screens/DeleteMovie';
import Favorites from './src/screens/Favorites';
import UpcomingMovies from './src/screens/UpcomingMovies';

import { FavoriteProvider } from './src/screens/FavoriteContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login" // 👈 Empieza en Login
          screenOptions={{
            headerStyle: { backgroundColor: '#2C3E50' },
            headerTintColor: '#ECF0F1',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Login" component={Login} options={{ title: 'Bienvenido' }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Películas' }} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ title: 'Detalles de la Película' }} />
          <Stack.Screen name="AddMovie" component={AddMovie} options={{ title: 'Agregar Película' }} />
          <Stack.Screen name="EditMovie" component={EditMovie} options={{ title: 'Editar Película' }} />
          <Stack.Screen name="DeleteMovie" component={DeleteMovie} options={{ title: 'Eliminar Película' }} />
          <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Películas Favoritas' }} />
          <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} options={{ title: 'Próximos Estrenos' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
