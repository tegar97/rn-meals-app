import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import MealItem from "./../components/MealItem";
const Meallist = () => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    aligIntems: "center",
    padding: 15,
  },
});
export default Meallist;
