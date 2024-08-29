import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {

    return (
        <Stack>
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack>

    );
}
