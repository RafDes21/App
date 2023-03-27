import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";

import { styles } from "./styles";
import AppNavigator from "./navigation";

//redux
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  const [loaded] = useFonts({
    "RedHat-Bold": require("../assets/fonts/RedHatDisplay-Bold.ttf"),
    "RedHat-Light": require("../assets/fonts/RedHatDisplay-Light.ttf"),
    "RedHat-Medium": require("../assets/fonts/RedHatDisplay-Medium.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
