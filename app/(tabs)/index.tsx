import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignOutButton from '@/components/SignOutButton'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Text>HomeScreen</Text>
      <SignOutButton />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})