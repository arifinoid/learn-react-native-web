import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#8fb299"
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
  },
  greyText: {
    color: "#655262"
  },
  fadedBackground: {
    backgroundColor: "#b2a1a1"
  }
});

interface Props {
  exercise: string;
  repsAndWeight: string;
  sets: string[];
}

export const WorkoutCard: React.FC<Props> = ({
  exercise,
  repsAndWeight,
  sets
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{exercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          if (set === "x") {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              >
                <Text style={[styles.circleText, styles.greyText]}>X</Text>
              </View>
            );
          }

          if (set === "") {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              />
            );
          }

          return (
            <View style={styles.circle} key={set + index}>
              <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
