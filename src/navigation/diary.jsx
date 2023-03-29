import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { THEMES } from "../constants";
import { DiaryList, EventDetail } from "../screens";

const Stack = createNativeStackNavigator();

const DiaryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="userList">
      <Stack.Screen
        name="EventList"
        component={DiaryList}
        options={{ title: "Events", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ title: "DETAILS", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export default DiaryNavigator;
