import React, { useEffect } from 'react'
import { Redirect, router } from 'expo-router'

const index = () => {
  return <Redirect href="/(auth)/welcome" />
}

export default index