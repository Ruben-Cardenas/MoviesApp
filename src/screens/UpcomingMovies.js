import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';

const upcomingMovies = [
  {
    id: '1',
    title: 'Deadpool & Wolverine',
    description: 'Deadpool regresa junto a Wolverine en una aventura épica del multiverso.',
    trailer: 'https://www.youtube.com/watch?v=73_1biulkYk',
    image: 'https://m.media-amazon.com/images/I/81cgt1hGG3L.jpg'
  },
  {
    id: '2',
    title: 'Joker: Folie à Deux',
    description: 'La secuela del Joker con Joaquin Phoenix y Lady Gaga.',
    trailer: 'https://www.youtube.com/watch?v=xy8aJw1vYHo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnL4xdX-lMcossms_vuPqKi61MbVvbCVbMA&s'
  },
  {
    id: '3',
    title: 'Inside Out 2',
    description: 'Riley enfrenta nuevas emociones en su adolescencia.',
    trailer: 'https://www.youtube.com/watch?v=LEjhY15eCx0',
    image: 'https://dailynorthwestern.com/wp-content/uploads/2024/06/inside-out2-dannyogrady-1-1200x800.png'
  },
  {
    id: '4',
    title: 'Kung Fu Panda 4',
    description: 'Po se embarca en otra aventura para proteger el Valle de la Paz.',
    trailer: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBVR2UuYXKuT4m4fMPXqy2OOXkwq-ZndtEg&s'
  },
  {
    id: '5',
    title: 'Despicable Me 4',
    description: 'Gru y sus minions enfrentan una nueva amenaza.',
    trailer: 'https://www.youtube.com/watch?v=HwzkbZG9jSY',
    image: 'https://m.media-amazon.com/images/M/MV5BM2U2MWY1ZWYtOWZmMS00ZDM0LTk0OWMtYzBlY2MxZWE0OGVjXkEyXkFqcGdeQWJpbndhYWtz._V1_.jpg'
  },
  {
    id: '6',
    title: 'Avatar 3',
    description: 'Continuación de la saga de Pandora por James Cameron.',
    trailer: 'https://www.youtube.com/watch?v=d9MyW72ELq0',
    image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'
  },
  {
    id: '7',
    title: 'Wicked',
    description: 'Adaptación musical de la historia de las brujas de Oz.',
    trailer: 'https://www.youtube.com/watch?v=uHb7au6Gmls',
    image: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'
  },
  {
    id: '8',
    title: 'The Batman 2',
    description: 'Robert Pattinson regresa como el Caballero Oscuro.',
    trailer: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
    image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
  },
];

const UpcomingMovies = ({ navigation }) => {
  const openTrailer = (url) => {
    Linking.openURL(url).catch(err => console.error('Error al abrir el trailer:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Próximos Estrenos</Text>
      <FlatList
        data={upcomingMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieDescription}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MovieDetails', { movie: item })}
              >
                <Text style={styles.buttonText}>Ver Detalles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => openTrailer(item.trailer)}
              >
                <Text style={styles.buttonText}>Ver Trailer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  movieItem: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDescription: {
    marginTop: 6,
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#008080',
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default UpcomingMovies;
