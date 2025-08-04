import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NotesImage from '../assets/images/notes.png';

const HomeScreen = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if(!loading && user) {
      router.replace('/notes');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View
      style={styles.container}>
      <Image style={styles.image} source={NotesImage}/>
      <Text style={styles.title}>Notes</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333'
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginLeft: 30,
  },
  centeredContainer: {
    allignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
})

export default HomeScreen