import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Layout = () => {
  return (
      <Tabs>
          <Tabs.Screen name="chat" options={{ headerShown: false }} />
          <Tabs.Screen name="home" options={{ headerShown: false }} />
          <Tabs.Screen name="profile" options={{ headerShown: false }} />
          <Tabs.Screen name="rides" options={{ headerShown: false }} />

      </Tabs>
  )
}

export default Layout 