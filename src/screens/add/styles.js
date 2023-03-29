import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.background,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "RedHat-Bold",
    marginVertical: 20,
    color: THEMES.secondary,
  },
  input: {
    borderBottomColor: THEMES.primary,
    borderBottomWidth: 1,
    marginVertical:20,
    fontSize: 16,
  },
});
