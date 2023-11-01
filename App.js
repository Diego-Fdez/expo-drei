import { Canvas } from '@react-three/fiber/native';
import { Suspense } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import Model from './app/components/Model';

export default function App() {
  //const [OrbitControls, events] = useControls();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer}>
        <Canvas>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Grey Chair</Text>
          <Text style={styles.textPrice}>$80.00</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.textButton}>Buy now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6fb',
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-between',
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: '#051e47',
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 28,
    color: '#3f6900',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    textAlign: 'justify',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3f6900',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
