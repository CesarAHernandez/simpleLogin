import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    StatusBar } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            />

            <TextInput  
            placeholder = "User Name"
            placeholderTextColor="rgba(255,255,255,.9)"
            returnKeyType = 'next'
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = 'email-address'
            autoCorrect = {false}
            autoCapitalize = 'none'
            style={styles.input}/>

            <TextInput  
            placeholder = "Password"
            placeholderTextColor="rgba(255,255,255,.9)"
            returnKeyType = 'go'
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}/>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
   },
   input:{
       height: 40,
       backgroundColor: 'rgba(255,255,255,.3)',
       marginBottom: 20,
       color: '#fff',
       paddingHorizontal: 10,
   },
   buttonContainer:{
       backgroundColor: '#2980b9',
       paddingVertical: 15,
   },
   buttonText:{
       textAlign: 'center',
       color: '#ffffff',
       fontWeight: '700',
   }

});
