import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
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
});
export default FilterScreen;
