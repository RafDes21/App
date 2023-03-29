import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import { styles } from "./styles";

const EventItem = ({ id,date, name, image, description, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: description }} />
      <View style={styles.info}>
        <Text style={styles.title}>{image}</Text>
        <Text style={styles.address}>{date}</Text>
      </View>
      <Text>See details</Text>
    </TouchableOpacity>
  );
};

export default EventItem;
