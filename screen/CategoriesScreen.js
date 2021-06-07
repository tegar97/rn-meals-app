import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text>
      <Button
        title="Go To Meals "
        onPress={() =>
          props.navigation.navigate({ routeName: "CategoriesMeal" })
        }
      />
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
