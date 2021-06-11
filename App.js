import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [number, onChangeNumber] = React.useState(0);
  const [message, setMessage] = React.useState("");
 

    function getSquare() {
      const squared = number * number;
      return `The square of ${number} is ${squared}`;

    }

    return (
    <View style={styles.container}>
      <Text>Input a number:</Text>
      <TextInput 
      onChangeText={onChangeNumber}
      value={number}
      keyboardType="numeric"
      />

      <Button title="Calc Square" onPress={() =>setMessage(getSquare())}/>

      <StatusBar style="auto" />
      <Text>{message}</Text>
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
