import React, { useEffect } from 'react'
import { Redirect, router } from 'expo-router'

const index = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/welcome")
    }, 3000)
  }, [])

  return <Redirect href="/(auth)/welcome" />
}

export default index