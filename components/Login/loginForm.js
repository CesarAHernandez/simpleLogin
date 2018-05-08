import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput  
            placeholder = "User Name"
            placeholderTextColor="rgba(255,255,255,.9)"
            style={styles.input}/>
            <TextInput  
            placeholder = "Password"
            placeholderTextColor="rgba(255,255,255,.9)"
            style={styles.input}/>

            
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
   }

});
