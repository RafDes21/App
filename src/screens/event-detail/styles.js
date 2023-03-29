import { StyleSheet } from "react-native";
import {THEMES} from "../../constants"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEMES.secondary
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  address:{
    fontSize: 30,
    textTransform: "uppercase",
    textAlign:"center",
    marginVertical:20,
    fontFamily: "RedHat-Medium"
  },
  detail:{
    fontSize:20,
    marginHorizontal:20,
    fontFamily: "RedHat-Light"
  },
  date:{
    fontSize: 16,
    textAlign:"center",
    marginTop:80,
    color:THEMES.background,
    fontFamily: "RedHat-Bold"
  }
});
