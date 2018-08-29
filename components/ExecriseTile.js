import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Tile, Divider } from 'react-native-elements'

export default class ExecriseTile extends React.Component {
  render() {
    return (
      <View>
        <Tile
          imageSrc={require('../Media/exercise-clipart-1-clip-art-8.jpeg')}
          title="Execrise with colleague"
          titleStyle={{textAlign:'auto'}}>
        </Tile>

      </View>
    )
  }
}
