import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FavoriteContext } from './FavoriteContext';

const movies = [
  {
    id: '1',
    title: 'Inception',
    description: 'Sueños dentro de sueños.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s'
  },
  {
    id: '2',
    title: 'Titanic',
    description: 'Amor a bordo del Titanic.',
    image: 'https://m.media-amazon.com/images/I/51+Gc0sFa5L._AC_UF894,1000_QL80_.jpg'
  },
  {
    id: '3',
    title: 'Avatar',
    description: 'Exploración en Pandora.',
    image: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg'
  },
  {
    id: '4',
    title: 'Interstellar',
    description: 'Viaje espacial y tiempo.',
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
  },
  {
    id: '5',
    title: 'Avengers',
    description: 'Los héroes se reúnen.',
    image: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg'
  },
  {
    id: '6',
    title: 'Spider-Man',
    description: 'El hombre araña regresa.',
    image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
  },
  {
    id: '7',
    title: 'Black Panther',
    description: 'Rey de Wakanda.',
    image: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'
  },
  {
    id: '8',
    title: 'The Batman',
    description: 'Oscuro y detective.',
    image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
  }
];

export default function Home() {
  const navigation = useNavigation();
  const { favoriteMovies, toggleFavorite } = useContext(FavoriteContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isFavorite = favoriteMovies.some(fav => fav.id === item.id);
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('MovieDetails', {
            title: item.title,
            description: item.description,
            image: item.image,
          })
        }
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => toggleFavorite(item)}
        >
          <Icon
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={isFavorite ? '#FF3D57' : '#aaa'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Cartelera Cinematográfica 🎞️</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Buscar película..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#D32F2F' }]}
          onPress={() => navigation.navigate('AddMovie')}
        >
          <Icon name="add" size={20} color="#fff" />
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#1976D2' }]}
          onPress={() => navigation.navigate('EditMovie')}
        >
          <Icon name="edit" size={20} color="#fff" />
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#C2185B' }]}
          onPress={() => navigation.navigate('DeleteMovie')}
        >
          <Icon name="delete" size={20} color="#fff" />
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F57C00' }]}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Icon name="favorite" size={20} color="#fff" />
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#512DA8' }]}
          onPress={() => navigation.navigate('UpcomingMovies')}
        >
          <Icon name="movie" size={20} color="#fff" />
          <Text style={styles.buttonText}>Estrenos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredMovies}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 15,
    fontFamily: 'serif',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  searchInput: {
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#2C2C2C',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 25,
    margin: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 15,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    margin: 6,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#FFD700',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    color: '#ccc',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
