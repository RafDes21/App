import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import React, { useState } from "react";
import { View, Image, Text, Alert, Button } from "react-native";
import { THEMES } from "../../constants";

import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission denied", "We need permission to use the camera", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text style={styles.title}>No image selected</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Take photo" color={THEMES.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;