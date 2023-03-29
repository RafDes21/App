import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { ImageSelector } from "../../components";
import { useDispatch } from "react-redux";
import { saveDiary } from "../../store/slices/api-diary";

import { styles } from "./styles";
import { THEMES } from "../../constants";

const Add = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(null);

  const onImage = (uri) => {
    setImage(uri);
  };

  const onHandleSubmit = () => {
    const date = new Date().toString();
    dispatch(saveDiary(date, name, image, description));
    navigation.navigate("UserList")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Event</Text>
      <TextInput
        style={styles.input}
        placeholder="write the place..."
        placeholderTextColor={THEMES.secondary}
        
        onChangeText={(newText) => setName(newText)}
        value={name}
      />
      <ImageSelector onImage={onImage} />
      <TextInput
        style={styles.input}
        placeholder="add a description"
        onChangeText={(newText) => setDescription(newText)}
        value={description}
        placeholderTextColor={THEMES.secondary}
      />
      <Button title="save to diary" onPress={onHandleSubmit} />
    </View>
  );
};

export default Add;
