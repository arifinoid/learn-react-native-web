import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#486550",
    height: 50,
    width: "100%"
  },
  row: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  timeText: {
    fontSize: 18,
    color: "#fff"
  },
  x: {
    fontSize: 30,
    color: "#b2a1a1"
  },
  line: {
    height: 3,
    backgroundColor: "#ff0"
  }
});

export const WorkoutTimer: React.FC<Props> = ({
  onXPress,
  currentTime,
  percent
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
