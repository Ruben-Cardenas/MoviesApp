import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas
import Home from './src/screens/Home';
import MovieDetails from './src/screens/MovieDetails';
import AddMovie from './src/screens/AddMovie';
import EditMovie from './src/screens/EditMovie';
import DeleteMovie from './src/screens/DeleteMovie';
import Favorites from './src/screens/Favorites';

// Importar el context provider
import { FavoriteProvider } from './src/screens/FavoriteContext'; // Ajusta esta ruta si es necesario

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{ title: 'Detalles de la Película' }}
          />
          <Stack.Screen
            name="AddMovie"
            component={AddMovie}
            options={{ title: 'Agregar Película' }}
          />
          <Stack.Screen
            name="EditMovie"
            component={EditMovie}
            options={{ title: 'Editar Película' }}
          />
          <Stack.Screen
            name="DeleteMovie"
            component={DeleteMovie}
            options={{ title: 'Eliminar Película' }}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{ title: 'Favoritos' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
