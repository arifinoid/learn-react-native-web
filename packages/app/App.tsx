/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>{count}</Text>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  }
});

export default App;
