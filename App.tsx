
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');

  const numericAge = Number(age);
  const validAge = age.trim() !== '' && Number.isFinite(numericAge);

  const lower = validAge ? (220 - numericAge) * 0.65 : 0;
  const upper = validAge ? (220 - numericAge) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits</Text>

      <Text style={styles.label}>Age</Text>

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="decimal-pad"
        placeholder="Enter your age"
      />

      <Text style={styles.result}>
        Lower limit: {lower}
      </Text>

      <Text style={styles.result}>
        Upper limit: {upper}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    fontSize: 18,
    marginBottom: 25,
  },
  result: {
    fontSize: 20,
    marginBottom: 15,
  },
});  
