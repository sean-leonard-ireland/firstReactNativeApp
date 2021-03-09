import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import EventCard from "./EventCard";
import ActionButton from "react-native-action-button";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#F3F3F3",
  },
});

class EventList extends Component {
  state = {
    events: [],
  };

  handleAddEvent = () => {
    this.props.navigation.navigate("EventForm");
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map((evt) => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = require("./db.json").events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }

  render() {

    return [
      <FlatList
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        style={styles.list}
        keyExtractor={(item) => item.id}
      />,
      <ActionButton
        key="fab"
        buttonColor="rgba(231,76,60,1)"
        onPress={this.handleAddEvent}
      />,
    ];
  }
}
export default EventList;
