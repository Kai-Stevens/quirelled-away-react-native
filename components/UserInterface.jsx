import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
// import the countdown component
import CountDown from 'react-native-countdown-component';
// import package to restart the app when the game is over
import { NativeModules } from 'react-native';


export default function UserInterface({amountOfNuts, startPressed, setStartPressed}) {
  const [show, setShow] = useState(false);
  // Timer

  const finishFunction = () => {
    if (amountOfNuts > 20) {
      alert(`You earned a total of ${amountOfNuts} nuts!, that's enough to survive the winter!`);
    } else {
      alert(`You earned a measly ${amountOfNuts} amount of nuts, you perish in the cold winter`)
    }
    NativeModules.DevSettings.reload();
  }

  // Amount of Nuts
  // Seeds
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <TouchableOpacity
        onPress={() => { 
            setShow(!show)
            setStartPressed(true);
          }
        }
        >
          <Text style={styles.text}>START</Text>
        </TouchableOpacity>
        {show && <CountDown
                  until={20}
                  timeToShow={['S']}
                  size={30}
                  onFinish={finishFunction}
                  />
        }
      </View>

      <View>
        <Text style={styles.text}>Inventory:</Text>
        <Text style={styles.text}>{`Current Nuts: ${amountOfNuts}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20
  },

  timer: {
    alignItems: 'center'
  },

  score: {

  },

  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});