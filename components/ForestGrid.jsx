import { StyleSheet, Text, View } from 'react-native';
import ForestBlock from './ForestBlock'

export default function ForestGrid({startPressed, amountOfNuts, setAmountOfNuts}) {
  const numOfBlocks = 28;

  // 1/3 chance of returning true
  const genRandomNuts = () => {
    const randomNum = Math.floor(Math.random() * 3); // 0, 1, or 2
    return randomNum > 1 ? true : false;
  }

  const blockArray = Array.from({length: numOfBlocks}, (_, index) => {
    return <ForestBlock startPressed={startPressed} key={index} number={index} hasNutFunc={genRandomNuts} amountOfNuts={amountOfNuts} setAmountOfNuts={setAmountOfNuts}/>
  });

  return (
    <View style={styles.container}>
      {blockArray}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#997868',
    justifyContent: 'space-evenly',
  },
});