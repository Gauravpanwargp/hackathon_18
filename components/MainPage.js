import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import Dashboard from './Dashboard'
import AppHeader from './AppHeader'

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppHeader title="Dashboard"/>
        <Dashboard/>
      </View>

    )
  }
}
