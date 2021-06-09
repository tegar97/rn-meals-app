import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  FlatList,
} from "react-native";
import MealItem from "../components/MealItem";
import Meallist from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "./../constant/colors";
const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return <Meallist listData={displayedMeal} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default CategoryMealScreen;
