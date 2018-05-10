import React ,{ Component } from 'react';
import { StyleSheet, Text, View, Image,KeyboardAvoidingView} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}> 
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source= {require ('../../src/images/Octocat.png')}/>
                <Text style={styles.logoText}>This is a github logo with React-Native</Text>
            </View>
            <View style={styles.formContainer}>
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
        </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer:{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logo:{
      width: 100,
      height: 100,
  },
  logoText:{
      color: '#fff',
      width: 170,
      marginTop: 10,
  }
});