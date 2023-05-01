import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
  DatePickerIOS,
} from "react-native";
import { useState } from "react";

import Task from "./Task";

const Homepage = () => {
  const [date, setDate] = useState(new Date());
  const [task, setTask] = useState(null);
  const [taskItems, setTaskItems] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      Alert.alert(
        "Cannot select a date in the past",
        "Please select a valid date",
        [{ text: "OK" }]
      );
      return;
    }
    setTaskItems([...taskItems, { task: task, date: date }]);
    setTask(null);
    setShowCalendar(false);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
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
                    text={item.task}
                    date={item.date}
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <View style={styles.add}>
              <Text numberOfLines={2}>Specify a due date</Text>
            </View>
          </TouchableOpacity>
        </View>

        {showCalendar && (
          <View style={styles.calendarWrapper}>
            <View style={styles.calendar}>
              <View style={styles.calendarHeader}>
                <Text
                  style={styles.calendarTitle}
                  onPress={() => Keyboard.dismiss()}
                >
                  Select a due date
                </Text>
                <TouchableOpacity onPress={() => setShowCalendar(false)}>
                  <Text style={styles.calendarClose}> ✕</Text>
                </TouchableOpacity>
              </View>
              <DatePickerIOS
                date={date}
                onDateChange={handleDateChange}
                mode="date"
                minimumDate={new Date()}
              />
              <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>Add task</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flex: 1,
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  add: {
    width: 80,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  addWrapper: {
    width: 100,
    height: 50,
    backgroundColor: "#55BCF6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  calendarContainer: {
    position: "absolute",
    top: 900,
    right: 300,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarWrapper: {
    position: "absolute",
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 16,
    marginTop: 16,
  },

  calendarClose: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Homepage;
