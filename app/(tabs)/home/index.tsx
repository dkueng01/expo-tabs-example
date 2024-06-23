import React from 'react'
import { Link } from 'expo-router'
import { View, Heading } from 'tamagui'

export default function home() {
  return (
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Heading size={'$10'} color={'violet'}>
        TAMAGUI
      </Heading>
      <Link href='/home/settings'>Push settings</Link>
    </View>
  )
}