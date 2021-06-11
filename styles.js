import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:{
      width: 200,
      borderColor:"gray",
      borderWidth:1,
      borderStyle:"solid",
      borderRadius:3,
      margin:5,
  },
    text:{
      alignSelf:"stretch",
  },
    button:{
     backgroundColor:"#fff",
     borderColor:"blue",
  },
  box: {
    backgroundColor: 'teal',
    height:125,
    width:200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },
  boxText: {
    color: "white",
    fontSize:30,
  },
  boxTextSmall: {
    color: "white",
    fontSize:10,
  },
  });
  

export default styles;

