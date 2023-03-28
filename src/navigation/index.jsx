import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";

const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      {token ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
