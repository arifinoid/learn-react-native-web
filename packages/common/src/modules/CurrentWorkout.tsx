import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

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

  React.useEffect(() => {
    return () => {
      rootStore.workoutTimerStore.stopTimer();
    };
  }, []);

  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExercises.map((exec, index) => {
        return (
          <WorkoutCard
            onSetPress={setIndex => {
              rootStore.workoutTimerStore.startTimer();
              const value = exec.sets[setIndex];

              let newValue: string;

              if (value === "") {
                newValue = `${exec.reps}`;
              } else if (value === "0") {
                rootStore.workoutTimerStore.stopTimer();
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
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimer
          percent={rootStore.workoutTimerStore.percent}
          currentTime={rootStore.workoutTimerStore.display}
          onXPress={() => rootStore.workoutTimerStore.stopTimer()}
        />
      ) : null}
    </View>
  );
});
