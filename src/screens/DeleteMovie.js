import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DeleteMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !imageUrl) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Aquí iría la lógica para eliminar película (DELETE a la API)
    Alert.alert('Película eliminada', `Título: ${title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Descripción</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>URL de Imagen</Text>
      <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} />

      <TouchableOpacity style={[styles.button, { backgroundColor: '#d32f2f' }]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Eliminar Película</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 15
  },
  button: {
    backgroundColor: '#d32f2f', padding: 15, borderRadius: 5, alignItems: 'center'
  },
  buttonText: { color: 'white', fontWeight: 'bold' }
});

export default DeleteMovie;
