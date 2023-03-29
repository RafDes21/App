import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DiaryNavigator from "./diary";
import AddNavigator from "./add";
import FavoritesNavigator from "./favorites";

import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="DiaryTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="DiaryTab"
        component={DiaryNavigator}
        options={{
          title: "Diary",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "book" : "book-outline"} size={22} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddTab"
        component={AddNavigator}
        options={{
          title: "Register",
          headerTitleAlign:"center",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={28}
            />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="FavoritesTab"
        component={FavoritesNavigator}
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "heart" : "heart-outline"} size={22} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
