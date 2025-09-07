import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from 'expo-router'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from '@clerk/clerk-expo';

const TabsLayout = () => {
    const insets = useSafeAreaInsets();
    const { isSignedIn } = useAuth();

    if (!isSignedIn) return <Redirect href="/(auth)" />;
  return (
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#657786",
        tabBarStyle: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#E1E8ED",
        height: 50 + insets.bottom,
        paddingTop: 8,
        },
        headerShown: false,
      }}
    >
        <Tabs.Screen
            name="index"
            options={{ title: '', 
            tabBarIcon: ({size, color}) => <Feather name="home" size={24} color={color} />
            }}
        />
        <Tabs.Screen
            name="search"
            options={{ title: '', 
            tabBarIcon: ({size, color}) => <Feather name="search" size={24} color={color} />
            }}
        />
        <Tabs.Screen
            name="notifications"
            options={{ title: '', 
            tabBarIcon: ({size, color}) => <Feather name="bell" size={24} color={color} />
            }}
        />
        <Tabs.Screen
            name="messages"
            options={{ title: '', 
            tabBarIcon: ({size, color}) => <Feather name="mail" size={24} color={color} />
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{ title: '', 
            tabBarIcon: ({size, color}) => <Feather name="user" size={24} color={color} />
            }}
        />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})