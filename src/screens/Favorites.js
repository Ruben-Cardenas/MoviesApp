import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate que esté instalado
import { FavoriteContext } from './FavoriteContext';

const Favorites = () => {
  const { favoriteMovies, toggleFavorite } = useContext(FavoriteContext);

  // Animación simple para el icono de eliminar (pulso)
  const scaleValue = new Animated.Value(1);

  const animateDelete = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.3,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleDelete = (item) => {
    animateDelete();
    toggleFavorite(item);
  };

  const renderMovie = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {item.description || 'Sin descripción'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handleDelete(item)}
        activeOpacity={0.7}
        style={styles.deleteBtn}
      >
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <Icon name="trash-bin" size={28} color="#e50914" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Películas Favoritas</Text>
      {favoriteMovies.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="film-outline" size={80} color="#444" />
          <Text style={styles.emptyText}>No tienes películas favoritas aún.</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // fondo negro profundo
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: '900',
    color: '#e50914', // rojo Netflix
    marginBottom: 25,
    alignSelf: 'center',
    letterSpacing: 1.2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 7,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  poster: {
    width: 110,
    height: 160,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  info: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#bbb',
    lineHeight: 18,
  },
  deleteBtn: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#555',
    fontSize: 20,
    marginTop: 15,
    fontStyle: 'italic',
  },
});

export default Favorites;
