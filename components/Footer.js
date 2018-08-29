import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup, Icon } from 'react-native-elements'

import "@expo/vector-icons"; // 5.2.0

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='home'
          color='#9B9B9B'
          size={45}
        />
        <Icon
          name='fitness-center'
          color='#9B9B9B'
          size={45}
        />
        <Icon
          name='notifications'
          color='#9B9B9B'
          size={45}
        />
        <Icon
          name='chat'
          color='#9B9B9B'
          size={45}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    paddingLeft:25,
    paddingRight:25,
    height: 65,
  },
});
