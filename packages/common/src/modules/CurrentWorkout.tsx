import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50
  }
});

interface Props
  extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
  }> {}

export const CurrentWorkout: React.FC<Props> = observer(
  ({
    history,
    match: {
      params: { day, month, year }
    }
  }) => {
    const rootStore = React.useContext(RootStoreContext);

    React.useEffect(() => {
      return () => {
        rootStore.workoutTimerStore.stopTimer();
      };
    }, []);

    const isCurrentWorkout = !year && !month && !day;
    const dateKey = `${year}-${month}-${day}`;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}
        >
          {(isCurrentWorkout
            ? rootStore.workoutStore.currentExercises
            : rootStore.workoutStore.history[dateKey]
          ).map((exec, index) => {
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
          <Button
            title="Save"
            onPress={() => {
              if (isCurrentWorkout) {
                rootStore.workoutStore.history[dayjs().format("YYYY-MM-DD")] =
                  rootStore.workoutStore.currentExercises;
                rootStore.workoutStore.currentExercises = [];
              }
              history.push("/");
            }}
          />
        </ScrollView>
        {rootStore.workoutTimerStore.isRunning ? (
          <WorkoutTimer
            percent={rootStore.workoutTimerStore.percent}
            currentTime={rootStore.workoutTimerStore.display}
            onXPress={() => rootStore.workoutTimerStore.stopTimer()}
          />
        ) : null}
      </View>
    );
  }
);
