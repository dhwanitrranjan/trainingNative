import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import Btn from './btn';
import Demo1 from './Components/Demo1';
import Demo2 from './Components/Demo2';
import Light from './Components/Light';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
        <Btn/>
        <Demo1/> */}
        {/* <Demo2/> */}
        <Light/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
