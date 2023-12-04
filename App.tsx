import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = (): React.JSX.Element => {
  const [randomBackgroundColor, setRandomBackgroundColor] = useState('#000000');

  const generateBackgroundColor = () => {
    const hexValues = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }

    setRandomBackgroundColor(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackgroundColor} />
      <View
        style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity onPress={generateBackgroundColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 20,
    backgroundColor: '#25CCF7',
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 10,
    shadowOffset: {
      height: 3,
      width: 1,
    },
  },
  actionBtnTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;
