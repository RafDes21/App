import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Add } from "../screens";

const Stack = createNativeStackNavigator();

const AddNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Add" screenOptions={{}}>
      <Stack.Screen name="Add" component={Add} options={{ title: "Register", headerTitleAlign: "center" }}/>
    </Stack.Navigator>
  );
};

export default AddNavigator;
