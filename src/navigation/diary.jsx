import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserList, UserDetail } from "../screens";

const Stack = createNativeStackNavigator();

const DiaryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="userList">
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default DiaryNavigator;
