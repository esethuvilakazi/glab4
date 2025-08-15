import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,setmessage] = useState('');

  const handlelogin = () =>{
    if(!username || !password){
      setmessage("Ensure both fields are inputed");
    }
    else if (username === "Veelaa" && password === "Veelaa1234") { 
    setmessage("✅ Login successful! Welcome to Veelaa");  
    } else { 
    setmessage("❌ Invalid login details."); 
    } 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text> Welcome to the Veelaa App please Login</Text>
        <TextInput style={styles.input} placeholder = 'Username' value={username} onChangeText= {setUsername}/>
        <TextInput style={styles.input} placeholder = 'Password' value={password} onChangeText = {setPassword}/>
        <Button title= "login" onPress={handlelogin}/>
        <Text>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '100%',
    padding: 10,
    backgroundColor: 'grey',
    color: 'white',
    border: 'black',
    borderRadius: 15,
    marginBottom: 15,
  }
});
