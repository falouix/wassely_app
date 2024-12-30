import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// TabBarIcon component
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
  color: string;
  size: number;
}) {
  return (
    <Entypo
      size={props.size} // Dynamically set the icon size
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#19b0a5' , // Active icon color
        tabBarInactiveTintColor:  'gray', // Inactive icon color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          shadowColor: '#000', // Add shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
          paddingBottom:3,
          borderRadius:25,
          margin:10
        },
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            name={route.name === 'index' ? 'home' : 'list'} // Example icons
            color={focused ? 'black' : 'gray'} // Change color based on focus
            size={focused ? 30 : 24} // Dynamically adjust size based on focus
          />
        ),
        headerShown: useClientOnlyValue(false, true),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={focused? '#19b0a5' : 'gray'} size={focused ? 30 : 22} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild >
              <Pressable>
                {({ pressed }) => (
                  <Entypo
                    name="info"
                    size={25}
                    color={ 'rgb(222, 57, 112)'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="CategoryScreen"
        options={{
          title: 'My',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="heart" color={focused? '#19b0a5' : 'gray'} size={focused ? 30 : 22} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="user" color={focused? '#19b0a5' : 'gray'} size={focused ? 30 : 22} />
          ),
        }}
      />
    </Tabs>
  );
}
