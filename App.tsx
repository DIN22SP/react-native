import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Transaction from './components/Transaction';


export default function App() {
  return (
    <View style={styles.container}>
      <Transaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#466c6b",
    alignItems: "center",
    justifyContent: "center",
  },
});
