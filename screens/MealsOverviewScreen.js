import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

const MealsOverviewScreen = ({ navigation, route }) => {
  // here we get also this route prop because this is component is registered as a screen in Stack.Screen

  //   const route = useRoute(); alternative method to reach this route prop

  const catId = route.params.categoryId; // we extract the categoryId, this is possible, because we set it as a second argument when we are navigating with navigation.navigate() in CategoriesScreen

  const displyedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displyedMeals} />;
};
export default MealsOverviewScreen;
