import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealScreen from "../screen/CategoryMealScreen";
import FavoriteScreen from "../screen/FavoriteScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import Colors from "./../constant/colors";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screen/FilterScreen";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
};
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    favorite: FavoriteScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator({
  Filters: FilterScreen,
});
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans",
        fontSize: 17,
      },
    },
  }
);
export default createAppContainer(MainNavigator);
