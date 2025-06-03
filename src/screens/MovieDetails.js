import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
  View, Text, Image, StyleSheet, Button, TouchableOpacity, 
  TextInput, FlatList, KeyboardAvoidingView, Platform, Keyboard 
} from 'react-native';
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
    if (comment.trim()) {
      setCommentsList(prev => [...prev, comment.trim()]);
      setComment('');
      Keyboard.dismiss();  // Oculta el teclado al enviar comentario
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Animatable.View style={styles.container} animation="fadeIn" duration={1000}>

        <Image source={{ uri: image }} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.movieDescription}>{description}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Editar" onPress={() => {}} color="#ff8c00" />
          <Button title="Eliminar" onPress={() => {}} color="#ff4500" />
        </View>

        <View style={styles.ratingContainer}>
          {Array(5).fill().map((_, index) => (
            <TouchableOpacity key={index} onPress={() => handleRating(index + 1)} activeOpacity={0.7}>
              <Icon
                name={index < rating ? "star" : "star-outline"}
                size={35}
                color="#FFD700"
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.ratingText}>Calificación: {rating} / 5</Text>

        <TextInput
          style={styles.commentInput}
          placeholder="Escribe tu comentario..."
          placeholderTextColor="#bbb"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <View style={styles.sendButton}>
          <Button title="Enviar Comentario" onPress={handleCommentSubmit} color="#ff8c00" />
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={commentsList}
            renderItem={({ item }) => <Text style={styles.comment}>• {item}</Text>}
            keyExtractor={(item, index) => index.toString()}
            style={styles.commentsList}
            ListEmptyComponent={<Text style={styles.noComments}>Sé el primero en comentar</Text>}
            keyboardShouldPersistTaps="handled"
          />
        </View>

      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',  // Fondo oscuro tipo cine
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  movieImage: {
    width: '100%',
    height: 280,
    borderRadius: 20,
    marginBottom: 25,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#ff8c00',
  },
  movieTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ff8c00',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Georgia',
    textShadowColor: '#ff4500',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  movieDescription: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 25,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  starIcon: {
    marginHorizontal: 6,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  ratingText: {
    fontSize: 18,
    color: '#ff8c00',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  commentInput: {
    backgroundColor: '#222',
    color: '#eee',
    borderRadius: 12,
    height: 80,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  sendButton: {
    marginBottom: 25,
    borderRadius: 12,
    overflow: 'hidden',
  },
  commentsList: {
    marginBottom: 30,
  },
  comment: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  noComments: {
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default MovieDetails;
