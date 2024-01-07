import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeModules } from 'react-native';

const { FlashlightModule } = NativeModules;

export default function App() {
  const turnOnFlashlight = () => {
    FlashlightModule.turnOnFlashlight();
  };

  const turnOffFlashlight = () => {
    FlashlightModule.turnOffFlashlight();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Flashlight App</Text>
      <TouchableOpacity style={styles.button} onPress={turnOnFlashlight}>
        <Text style={styles.buttonText}>🔦 Turn On Flashlight</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={turnOffFlashlight}>
        <Text style={styles.buttonText}>🚫 Turn Off Flashlight</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
