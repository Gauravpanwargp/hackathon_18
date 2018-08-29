import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'
import ChatTile from './ChatTile'
import ExecriseTile from './ExecriseTile'
import AppHeader from './AppHeader'
import Calendar from './Calendar'

export default class ExecrisePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader title={'Execrise'}/>
        <Calendar/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
