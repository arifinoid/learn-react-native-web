import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10
  }
});

interface Props {}

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExercises.map((exec, index) => {
        return (
          <WorkoutCard
            onSetPress={setIndex => {
              const value = exec.sets[setIndex];

              let newValue: string;

              if (value === "") {
                newValue = `${exec.reps}`;
              } else if (value === "0") {
                newValue = "";
              } else {
                newValue = `${parseInt(value) - 1}`;
              }

              exec.sets[setIndex] = newValue;
            }}
            key={index}
            sets={exec.sets}
            exercise={exec.exercise}
            repsAndWeight={`${exec.numSets}x${exec.reps} ${exec.weight}`}
          />
        );
      })}
    </View>
  );
});
