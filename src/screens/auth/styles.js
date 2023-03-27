import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEMES.background,
    marginTop: StatusBar.currentHeight,
  },
  cardContent: {
    width: "80%",
    padding: 20,
    backgroundColor: THEMES.primary,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontFamily:"RedHat-Bold"
  },
  label: {
    marginVertical:5,
    fontFamily:"RedHat-Medium",
    fontSize:15
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: THEMES.secondary,
    padding: 2,
    marginBottom:10,
    fontFamily:"RedHat-Light"
  },
  prompt: {
    marginTop: 10,
  },
  promptButton: {},
  promptMessage: {
    color:THEMES.letter,
    fontFamily:"RedHat-Bold"
  },
});
