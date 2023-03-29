import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

export const styles = StyleSheet.create({
  container: {},
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: THEMES.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title:{
    color: THEMES.primary
  }
});
