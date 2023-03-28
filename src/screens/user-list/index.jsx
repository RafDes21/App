import { View, Text, Button } from "react-native";

const UserList = ({navigation}) => {
  return (
    <View>
      <Text>user list</Text>
      <Button title="favorites"  onPress={()=>navigation.navigate("UserDetail")} />
    </View>
  );
};

export default UserList;
