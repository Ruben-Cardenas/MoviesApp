import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MovieDetails = ({ route }) => {
  const { title, description, image } = route.params;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleCommentSubmit = () => {
    if (comment) {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <Animatable.View style={styles.container} animation="fadeIn" duration={1000}>
      <Image source={{ uri: image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.movieDescription}>{description}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={() => {}} color="#3b8d99" />
        <Button title="Eliminar" onPress={() => {}} color="#e74c3c" />
      </View>

      <View style={styles.ratingContainer}>
        {(Array(5).fill().map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
            <Icon
              name={index < rating ? "star" : "star-outline"}
              size={30}
              color="#FFD700"
            />
          </TouchableOpacity>
        )))}
      </View>

      <Text style={styles.ratingText}>Calificación: {rating} / 5</Text>

      <TextInput
        style={styles.commentInput}
        placeholder="Escribe tu comentario..."
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enviar Comentario" onPress={handleCommentSubmit} color="#3b8d99" />

      <FlatList
        data={commentsList}
        renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  movieImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  movieDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
  },
  commentInput: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  comment: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default MovieDetails;
