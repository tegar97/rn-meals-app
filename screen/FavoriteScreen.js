import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustumHeaderButton from "../components/HeaderButton";
import Meallist from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavoriteScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <Meallist listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorite",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustumHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
