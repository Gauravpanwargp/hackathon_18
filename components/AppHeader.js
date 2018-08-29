import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

export default class AppHeader extends React.Component {

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: this.props.title, style: { color: 'black', fontSize: 20 } }}
          outerContainerStyles={{ backgroundColor: '#FFFFFF', height: 80 }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
          statusBarProps={{ barStyle: 'light-content' }}
        />
      </View>
    )
  }
}
