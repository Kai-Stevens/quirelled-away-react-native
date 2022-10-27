import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

export default function ForestBlock({number, hasNutFunc, startPressed, amountOfNuts, setAmountOfNuts}) {
  
  const [color, setColor] = useState('green');
  const [hasNut, setHasNut] = useState(false);
  const [buttonText, setButtonText] = useState("🌿")

  useEffect(() => {
    const doIHaveANut = hasNutFunc();
    setHasNut(doIHaveANut);
  }, [])


  const hasNutOnPress = () => {

    if (startPressed) {
      const numNuts = Math.floor(Math.random() * 5) + 1; // up to 5 nuts
      setColor('#a3674b');
      setButtonText("🌰")
      setAmountOfNuts(amountOfNuts + numNuts)
      // alert(`There are ${numNuts} here!`);
    } else {
      alert("You need to press the start button!")
    }
  }

  const hasNoNut = () => {
    if(startPressed) {
      setColor('#453d39')
      setButtonText("🍁")
    } else {
      alert("You need to press the start button!");
    }
  }

  return (
    <TouchableOpacity
    onPress={hasNut ? hasNutOnPress : hasNoNut} 
    style={[styles.block, {backgroundColor: color}]}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '23%',
    marginTop: 5,
    height: 65,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});