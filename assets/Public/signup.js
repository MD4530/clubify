import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';



export default function SignUp() {
  const [fName, setfName] =useState();
  const [lName, setlName] = useState();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clubify</Text>

      <View  style={{marginTop:100}}>
        
        <Text style={styles.pageTitle}> SignUp </Text>
        
        <TextInput 
          style={styles.fnameInputField}
          placeholder='username'
          value={fName}
          onChangeText={v => setfName(v)} 
        />

        <TextInput 
          style={styles.fnameInputField}
          placeholder='password'
          value={lName}
          onChangeText={text => setlName(text)} 
        />
      </View>

      <View style={{marginTop:15, width:100, marginLeft:15, marginRight:50, display:'flex'}}>
        
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    textAlign:'center',
    marginTop:40,
    color:'#f0f',
    fontFamily:'sans-serif',
    fontSize:25,

  },
  pageTitle:{
    textAlign:'left',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:15,
  },
  fnameInputField:{
    textAlign:'center',
    margin:15,
    padding:5,
    borderRadius:50,
    // borderColor:'Black',
    BorderStyle:'solid',
    fontWeight:'bold',
    fontSize:18,

    borderStyle:'solid',
    borderWidth:3,
    height:45,
    width:230,
  }
});
