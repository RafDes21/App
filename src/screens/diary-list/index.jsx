import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Card, EventItem } from "../../components";
import { loadDiary } from "../../store/slices/api-diary";
import { styles } from "./styles";

const DiaryList = ({ navigation }) => {
  const dispatch = useDispatch();
  const diary = useSelector((state) => state.diary.diary);

  useEffect(() => {
    dispatch(loadDiary());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <Card style={styles.cardContainer}>
      <EventItem
        {...item}
        onSelect={() =>
          navigation.navigate("EventDetail", { diaryId: item.id })
        }
      />
    </Card>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No events</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={diary}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default DiaryList;
