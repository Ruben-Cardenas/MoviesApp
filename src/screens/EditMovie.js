import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !imageUrl) {
      Alert.alert('⚠️ Campos incompletos', 'Por favor completa todos los campos.');
      return;
    }

    Alert.alert('🎞️ Película editada', `Título: ${title}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎬 Editar Película</Text>

      <View style={styles.inputGroup}>
        <Icon name="create-outline" size={20} color="#FFD700" />
        <TextInput
          style={styles.input}
          placeholder="Título"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.inputGroup}>
        <Icon name="document-text-outline" size={20} color="#FFD700" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripción"
          placeholderTextColor="#aaa"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.inputGroup}>
        <Icon name="image-outline" size={20} color="#FFD700" />
        <TextInput
          style={styles.input}
          placeholder="URL de la imagen"
          placeholderTextColor="#aaa"
          value={imageUrl}
          onChangeText={setImageUrl}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>✅ Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#1c1c1e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditMovie;
