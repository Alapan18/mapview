import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);
  const navigation = useNavigation();

  const handleLogin = () => {
    const email = 'xyz@gmail.com';
    const password = '123456';
    const enteredEmail = 'xyz@gmail.com'; // Change as needed
    const enteredPassword = '123456'; // Change as needed

    if (enteredEmail === email && enteredPassword === password) {
      console.log('Login Successful');
      navigation.navigate('Upload')

      // Perform successful login action here
    } else {
      console.log('Invalid credentials');
      // Handle incorrect login details here
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <LinearGradient
        colors={['#222', '#222', '#111']}
        style={styles.container}
      >
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder='Email Address'
          placeholderTextColor='#808e9b'
          style={styles.input}
          autoCorrect={true}
          autoComplete='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor='#808e9b'
          style={styles.input}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='google' type='font-awesome' size={30} color='#808e9b' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name='facebook-square'
              type='font-awesome'
              size={30}
              color='#808e9b'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='apple' type='font-awesome' size={30} color='#808e9b' />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: '#B53471' }]}>
              {' Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
  },
  loginButton: {
    backgroundColor: '#833471',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Login;
