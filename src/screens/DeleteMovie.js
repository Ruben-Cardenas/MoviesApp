import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // si usas expo o instala react-native-vector-icons

const DeleteMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !imageUrl.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Aquí la lógica para eliminar película (DELETE API)
    Alert.alert('Película eliminada', `Título: ${title}`);
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.header}>Eliminar Película</Text>

      <View style={styles.inputGroup}>
        <MaterialIcons name="movie" size={24} color="#e50914" style={styles.icon} />
        <TextInput
          placeholder="Título"
          placeholderTextColor="#888"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.inputGroup}>
        <MaterialIcons name="description" size={24} color="#e50914" style={styles.icon} />
        <TextInput
          placeholder="Descripción"
          placeholderTextColor="#888"
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputGroup}>
        <MaterialIcons name="image" size={24} color="#e50914" style={styles.icon} />
        <TextInput
          placeholder="URL de Imagen"
          placeholderTextColor="#888"
          style={styles.input}
          value={imageUrl}
          onChangeText={setImageUrl}
          keyboardType="url"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Eliminar Película</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    color: '#e50914',
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center',
    letterSpacing: 1,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    paddingVertical: 12,
    fontSize: 16,
  },
  textArea: {
    height: 80,
  },
  button: {
    backgroundColor: '#e50914',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#e50914',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.7,
  },
});

export default DeleteMovie;
