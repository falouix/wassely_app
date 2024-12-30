import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';

interface ProfileDetailsProps {
  user: {
    name: string;
    contacts: {
      email: string;
      phone: string;
    };
    address: string;
    role: string;
    photo?: string;
  };
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
  const navigation = useNavigation();
console.log(user)
  return (
    <View style={styles.container}>
      {user?.photo && <Image source={{ uri: user.photo }} style={styles.profilePic} />}
      <Text style={styles.subtitle}>Name: {user.name}</Text>
      <Text style={styles.subtitle}>Email: {user.contacts.email}</Text>
      <Text style={styles.subtitle}>Phone: {user.contacts.phone}</Text>
      <Text style={styles.subtitle}>Address: {user.address}</Text>
      <Text style={styles.subtitle}>Role: {user.role}</Text>

      <View style={styles.menu}>
      <TouchableOpacity
            style={[styles.menuItem, styles.manageStoresButton]}>
          <Text style={styles.menuText}>Orders Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.menuItem, styles.manageStoresButton]}>
          <Text style={styles.menuText}>Profile Settings</Text>
        </TouchableOpacity>
        {user.type === 'store' && (
          <TouchableOpacity
            style={[styles.menuItem, styles.manageStoresButton]}
            onPress={() => navigation.navigate('userprofile/ManageStores')}
          >
            <FontAwesome5 name="store" size={40} color="#FFF" style={styles.menuItemIcon} />
            <Text style={styles.menuItemText}>Manage Stores</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  
  menuItemText: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 5,
  },
  menuItemIcon: {
    marginHorizontal: 5,
    fontSize: 30,
    color: 'white',
  },
  manageStoresButton: {
    backgroundColor: '#19B0A5',
    flex: 1,
    alignItems: 'start',
    paddingHorizontal: 20,
    flexDirection: 'row', // Align items in a row
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
  
});

export default ProfileDetails;
