import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Tile , Divider} from 'react-native-elements'

export default class ChatTile extends React.Component {
  render() {
    return (
      <View>
        <Tile
          imageSrc={require('../Media/Mental-Health-1st-Aid.jpeg')}
          title="Chat with colleague or professional"
          titleStyle={{textAlign:'auto'}}>
        </Tile>
        <View style={{paddingLeft:40, paddingRight: 40, paddingTop: 10, paddingBottom: 15}}>
          <Divider style={{ backgroundColor: '#9B9B9B'}} />
        </View>
      </View>
    )
  }
}
