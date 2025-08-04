import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const HeaderLogout = () => {
  const { user, logout } = useAuth();
  return user ? (
    <TouchableOpacity onPress={logout} style={styles.logoutButton}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
}

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
          headerRight: () => <HeaderLogout />,
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

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RootLayout