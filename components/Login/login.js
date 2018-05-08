import React ,{ Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}> 
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source= {require ('../../src/images/Octocat.png')}/>
            </View>
            <View style={styles.formContainer}>
            </View>
        
        </View>

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
  }
});