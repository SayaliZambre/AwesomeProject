import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#CCCCCC" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#CCCCCC"
      />
      <Button title="Sign Up" onPress={() => {}} color="#6C63FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6C63FF',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    color: '#FFFFFF',
  },
});

export default SignUp;
