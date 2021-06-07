import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealScreen from "../screen/CategoryMealScreen";
import MealDetailScreen from "../screen/MealDetailScreem";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoriesMeal: CategoryMealScreen,
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
