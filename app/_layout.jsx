import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f35d00ff'
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000'
          },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: '#ffffff'
          }
          
      }}>
        <Stack.Screen name='index' options={{ title: 'Home'}}/>
        <Stack.Screen name='notes' options={{ headerTitle: 'Notes'}}/>
        <Stack.Screen name='auth' options={{ headerTitle: 'Login'}}/>
      </Stack>
    </AuthProvider>
  )
}

export default RootLayout