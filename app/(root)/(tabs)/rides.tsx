import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RideCard from '@/components/RideCard'
import { icons, images } from '@/constants'
import GoogleTextInput from '@/components/GoogleTextInput'
import Map from '@/components/Map'
import { useFetch } from '@/lib/fetch'
import { Ride } from '@/types/type'
import { useUser } from '@clerk/clerk-expo'

const rides = () => {
  const { user } = useUser();

  const {
    data: recentRides,
    loading,
    error,
  } = useFetch<Ride[]>(`/(api)/ride/${user?.id}`);
  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex-1  h-[200px] flex flex-col items-center justify-center">
            {!loading ? (
              <View className='flex-1 items-center justify-center '>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </View>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <Text className='text-2xl font-JakartaBold my-5'>All Rides</Text>
          </>
        }
      />
    </SafeAreaView>
  )
}

export default rides