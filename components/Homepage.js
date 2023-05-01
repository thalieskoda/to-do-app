import React from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView, TextInput,TouchableOpacity,  Keyboard, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

import Task from "./Task";
const Homepage = ()=> {
  //Setting the state for the task
  const [task, setTask] = useState();
  //Setting the state for the task ARRAY, in order to save them in the array
  const [taskItems, setTaskItems] = useState([]);

  //Adding the new task into the taskItems array
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  //Removing the task from the array with splice
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
    return (
        <SafeAreaView>
        <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                }}
                keyboardShouldPersistTaps="handled"
              >
                <View style={styles.tasksWrapper}>
                  <Text style={styles.sectionTitle}>Today's tasks</Text>
                  <View style={styles.items}>
                    {taskItems.map((item, index) => {
                      return (
                        <View key={index}>
                          <Task
                            completeTask={() => completeTask(index)}
                            text={item}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </ScrollView>

              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
              >
                <TextInput
                  style={styles.input}
                  placeholder={"Write a task"}
                  value={task}
                  onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tasksWrapper: {
      paddingTop: 30,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    items: {
      marginBottom: 900,
    },
    writeTaskWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#FFF",
      borderRadius: 60,
      borderColor: "#C0C0C0",
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: "#FFF",
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#C0C0C0",
      borderWidth: 1,
    },
    addText: {},
  });
export default Homepage