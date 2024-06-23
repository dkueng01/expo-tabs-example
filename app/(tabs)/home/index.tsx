import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link href='/home/settings'>Push settings</Link>
    </View>
  )
}