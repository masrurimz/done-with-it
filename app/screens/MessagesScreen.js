import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/list";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "T1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasda",
    description:
      "D1T1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasdaT1asdadadadasdasda",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [referesing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            key={item.id.toString()}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={referesing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
