import React, { Fragment, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.count}>{count}</Text>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>
    </Fragment>
  );
};

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
