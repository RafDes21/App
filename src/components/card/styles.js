import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    shadowColor: THEMES.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 20,
    borderRadius: 5,
    borderWidth:0.5,
    borderColor: THEMES.black,
  },
  
});
