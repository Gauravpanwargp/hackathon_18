import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, Divider, ButtonGroup } from 'react-native-elements'
import ChatTile from './ChatTile'

export default class Calender extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['All', 'Going', 'Saved', 'Past']
    const { selectedIndex } = this.state

    return (
      <View>
        <View style={{ paddingTop: 30, paddingLeft: 25 }}>
          <Text style={styles.calendarHeader}>Your Calendar</Text>
        </View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          containerStyle={{height: 40 }}
          buttons={buttons}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  calendarHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
