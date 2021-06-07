import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoryMealScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category meal Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealScreen;
