import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForestGrid from './components/ForestGrid'
import UserInterface from './components/UserInterface';
import { useState } from 'react';

export default function App() {
  const [amountOfNuts, setAmountOfNuts] = useState(0);
  const [startPressed, setStartPressed] = useState(false);

  return (
    <View style={styles.container}>
      <ForestGrid startPressed={startPressed} amountOfNuts={amountOfNuts} setAmountOfNuts={setAmountOfNuts}/>
      <UserInterface amountOfNuts={amountOfNuts} startPressed={startPressed} setStartPressed={setStartPressed}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 26,
    padding: 10,
    backgroundColor: '#997868',
  },
});
