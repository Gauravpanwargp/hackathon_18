import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'
import Dashboard from './Dashboard'
import AppHeader from './AppHeader'
import Footer from './Footer'

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppHeader title="DHI"/>
        <ScrollView>
          <View style={styles.container}>
            <Dashboard/>
          </View>
        </ScrollView>
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
