import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const EventDetail = ({ navigation, route }) => {
  const { diaryId } = route.params;
  const event = useSelector((state) =>
    state.diary.diary.find((diary) => diary.id === diaryId)
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.description }} style={styles.image} />
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{event.image}</Text>
      </View>
      <Text style={styles.detail}>Details : {event.date}</Text>
      <Text style={styles.date}>{event.name}</Text>
    </ScrollView>
  );
};

export default EventDetail;
