import { StyleSheet } from "react-native";
import { THEMES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEMES.background
  },
  emptyContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
   fontFamily: "RedHat-Bold"
  },
  cardContainer:{
    width:"90%",
    marginHorizontal:20,
    marginVertical:20
  }
});
