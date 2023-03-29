import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: THEMES.primary,
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEMES.white,
    borderRadius:10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: THEMES.background,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    color: THEMES.text,
    marginBottom: 10,
    textTransform: "uppercase",
    color:THEMES.background
  },
  address: {
    fontSize: 18,
    color: THEMES.black,
    color: THEMES.background
  },
});
