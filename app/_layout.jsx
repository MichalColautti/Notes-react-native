import { Stack } from "expo-router";

const RootLayout = () => {
  return (
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
    </Stack>
  )
}

export default RootLayout