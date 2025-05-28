import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener esta librería instalada
import { FavoriteContext } from './FavoriteContext'; // Ajusta esta ruta según tu estructura de carpetas

const Favorites = () => {
  const { favoriteMovies, toggleFavorite } = useContext(FavoriteContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Películas Favoritas</Text>
      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.id.toString()} // Convierte id a string para evitar warnings
        ListEmptyComponent={<Text>No tienes películas favoritas aún.</Text>}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Icon name="trash-outline" size={30} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  movieCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  movieImage: { width: 60, height: 90, marginRight: 15, borderRadius: 5 },
  movieTitle: { flex: 1, fontSize: 18 },
});

export default Favorites;
