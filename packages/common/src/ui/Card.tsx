import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10
  }
});

export const Card: React.FC<Props> = ({ children, onPress }) => {
  if (onPress) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={styles.card}>{children}</View>;
};
