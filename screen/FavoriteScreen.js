import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Meallist from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavoriteScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <Meallist listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favorite",
};

export default FavoriteScreen;
