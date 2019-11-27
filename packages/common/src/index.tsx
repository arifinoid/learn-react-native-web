import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CounterStoreContext } from "./stores/CounterStore";

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.count}>{counterStore.count}</Text>
      <Button title="Increment" onPress={() => counterStore.count++} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  count: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
