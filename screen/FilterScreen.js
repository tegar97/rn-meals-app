import React, { useState } from "react";
import { View, StyleSheet, Text, Switch, Platform } from "react-native";
import Colors from "./../constant/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{
          true: Colors.primaryColor,
        }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
      />
    </View>
  );
};

const FilterScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactosFree] = useState(false);
  const [isVegan, setIsVeganFree] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions </Text>
      <FilterSwitch
        label="Gluten-free "
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free "
        state={isLactoseFree}
        onChange={(newValue) => setIsLactosFree(newValue)}
      />
      <FilterSwitch
        label="Vegatarian"
        state={isVegan}
        onChange={(newValue) => setIsVegatarian(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationsOptions = {
  headerTitle: "Filter Screen",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});
export default FilterScreen;
