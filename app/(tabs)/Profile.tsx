import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, View, Text } from 'react-native';
import { useAuthRequest } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { FontAwesome } from '@expo/vector-icons';
import { makeRedirectUri } from 'expo-auth-session';
// Temporarily comment out ThemedText and PrimaryBtn for debugging
// import { ThemedText } from '@/components/ThemedText';
// import PrimaryBtn from '@/components/buttons/PrimaryBtn';

import ProfileDetails   from '@/components/profile/ProfileDetails';// Adjust the path as needed to import
export default function ProfileScreen() {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // Google Auth
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '780402245628-kgldoh8qhi3mq7l61h5eb1u3mahof5pi.apps.googleusercontent.com',
    iosClientId: 'your-ios-client-id.apps.googleusercontent.com',
    androidClientId: '780402245628-iv8dbeg4kgkta9n8u5jd26on8585u6mv.apps.googleusercontent.com',
    redirectUri: makeRedirectUri({ useProxy: true }),
  });

  // Facebook Auth
  const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: 'your-facebook-client-id',
  });

  const handleLogin = () => {
    const userRoles = {
      test: {
        username: 'test',
        password: 'test',
        userData: {
          type: 'user',
          name: 'Test User',
          address: '123 Test Street',
          contacts: { email: 'test@test.com', phone: '123-456-7890' },
          role: 'normal user',
        },
      },
      store: {
        username: 'store',
        password: 'store',
        userData: {
          type: 'store',
          name: 'Test Store',
          address: '123 Store Street',
          contacts: { email: 'store@test.com', phone: '123-456-7891' },
          role: 'store owner',
        },
      },
      admin: {
        username: 'admin',
        password: 'admin',
        userData: {
          type: 'admin',
          name: 'Admin User',
          address: '123 Admin Street',
          contacts: { email: 'admin@test.com', phone: '123-456-7892' },
          role: 'admin',
        },
      },
    };
  
    const role = Object.values(userRoles).find(
      (r) => r.username === username && r.password === password
    );
  
    if (role) {
      setIsConnected(true);
      setUser(role.userData);
    } else {
      alert('Invalid username or password');
    }
  };
  

  const handleGoogleLogin = async () => {
    const result = await promptAsync();
    if (result.type === 'success') {
      setIsConnected(true);
      setUser({
        name: result.params.name,
        email: result.params.email,
        photo: result.params.picture,
      });
    }
  };

  const handleFacebookLogin = async () => {
    const result = await fbPromptAsync();
    if (result.type === 'success') {
      setIsConnected(true);
      setUser({
        name: 'Name User',
        email: 'facebook@test.com',
        photo: 'facebook-profile-picture-url',
      });
    }
  };

  return !isConnected ? (
    <View style={styles.container}>
      {/* Replacing ThemedText with standard Text for debugging */}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* Replacing PrimaryBtn with TouchableOpacity for debugging */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn} onPress={handleGoogleLogin}>
        <FontAwesome name="google" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn} onPress={handleFacebookLogin}>
        <FontAwesome name="facebook" size={20} color="white" style={styles.socialIcon} />
        <Text style={styles.socialText}>Login with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.footerLinks}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <ProfileDetails user={user} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  loginBtn: {
    backgroundColor: '#19B0A5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {  
    color: 'white',
    fontSize: 16,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    color: 'white',
    textAlign:'center',
    width:'100%',
    fontSize: 16,
  },
  footerLinks: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  linkText: {
    color: '#19B0A5',
    textDecorationLine: 'underline',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  menu: {
    marginTop: 30,
    width: '100%',
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
});
