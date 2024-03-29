import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "./Card";

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10
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
  onSetPress: (index: number) => void;
}

export const WorkoutCard: React.FC<Props> = observer(
  ({ exercise, repsAndWeight, sets, onSetPress }) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
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
                  <TouchableOpacity
                    onPress={() => onSetPress(index)}
                    style={[styles.circle, styles.fadedBackground]}
                    key={set + index}
                  />
                );
              }

              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={styles.circle}
                  key={set + index}
                >
                  <Text style={[styles.whiteText, styles.circleText]}>
                    {set}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>
      </View>
    );
  }
);
