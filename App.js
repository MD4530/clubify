import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {SignUp} from './assets/Public/signup'
 

function sendValues(fName, lName) {
  console.log( "Welcome! "+ fName + " " + lName);
  Alert.alert("Welcome! "+ fName + " " + lName)
};

function singupPage(){
  <SignUp/>
}


export default function App() {
  const [fName, setfName] =useState();
  const [lName, setlName] = useState();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clubify</Text>

      <View  style={{marginTop:100}}>
        
        <Text style={styles.pageTitle}> Signin </Text>
        
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
        <Button 
          title='Sign in'
          onPress={()=>{ sendValues(fName, lName);}}
        />      

        <Button  
          title='Sign Up'
          onPress={()=> singupPage()}
        />
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

// ASRC Federal Holding Company supports a family of companies that provide a broad range 
// of services to federal civilian, intelligence and defense agencies. Our employees bring a 
// “can-do” attitude to resolve challenges. The reliability of services and unwavering commitment 
// to helping customers overcome their challenges has served as the catalyst for growth and expansion 
// of services.
