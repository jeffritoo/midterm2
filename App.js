import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Box from "./Box";

import styles from "./styles"

export default function App() {

  const [number1, onChangeNumber] = React.useState(0);
  const [number2, onChangeNumber2] = React.useState(0);
  const [message, setMessage] = React.useState("");
 

    function getSquare() {

      if(number1 <2 || number2 >100){
        return `Invalid Input, Please Try Again`;
      }
      if(number1 > number2){
        return `${number1} is greater than ${number2}`
      }
      if(number2 > number1){
        return `${number2} is greater than ${number1}`
      }
      if(number1 === number2){
        return `[${number1}] is equal to [${number2}]`
      }
    }

    return (
    <View style={styles.container}>

      <Box>Midterm Exam</Box>

      <Text>Number 1:</Text>
      <TextInput 
      style={styles.textInput}
      onChangeText={onChangeNumber}
      value={number1}
      keyboardType="numeric"
      />
      <Text>Number 2:</Text>
      <TextInput
      style={styles.textInput} 
      onChangeText={onChangeNumber2}
      value={number2}
      keyboardType="numeric"
      />

      <Button  title="COMPARE" onPress={() =>setMessage(getSquare())}/>

      <StatusBar style="auto" />
      <Text>{message}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textInput:{
//     width: 200,
//     borderColor:"gray",
//     borderWidth:1,
//     borderStyle:"solid",
//     borderRadius:3,
//     margin:5,
// },
//   text:{
//     alignSelf:"stretch",
// },
//   button:{
//    backgroundColor:"#fff",
//    borderColor:"blue",
// },
// box: {
//   backgroundColor: 'teal',
//   height:125,
//   width:200,
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius:10,
// },
// boxText: {
//   color: "white",
//   fontSize:30,
// },
// boxTextSmall: {
//   color: "white",
//   fontSize:10,
// },
// });
