import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text>
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
export default CategoriesScreen;
