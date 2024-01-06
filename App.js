import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
      <Text>Flashlight App</Text>
      <Button title="Turn On Flashlight" onPress={turnOnFlashlight} />
      <Button title="Turn Off Flashlight" onPress={turnOffFlashlight} />
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
});
