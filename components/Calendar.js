import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, Divider, ButtonGroup, Avatar } from 'react-native-elements'
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
      <View style={{flex:1}}>
        <ScrollView>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            containerStyle={{height: 40 }}
            buttons={buttons}
          />
          <View style={styles.date}>
            <Text style={{ fontSize: 18 }}>Today - 8/30/2018</Text>
          </View>
          <Divider style={{ backgroundColor: 'gray' }} />
          <View style={styles.activity}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>AEDR Badminton</Text>
            <Text style={{ fontSize: 19, paddingBottom: 5 }}>Thursday Night Championship</Text>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 15 }}>6:00 PM - Val Vista Park</Text>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              <View style={{padding:3}}></View>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              <View style={{padding:3}}></View>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              <View style={{paddingTop: 5, paddingLeft: 8}}>
                <Text style={{ fontSize: 30, color:'gray'}}>6</Text>
              </View>
              </View>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20}}>
            <Divider style={{ backgroundColor: 'gray'}} />
          </View>
          <View style={styles.activity}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>TRCW Ping Pong</Text>
            <Text style={{ fontSize: 19, paddingBottom: 5 }}>Weekly 2v2 (Beginner, Intermediate)</Text>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 15 }}>6:00 PM - Palo Verde Gym</Text>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOlJCwM4qy04L6WXehdOBPpZT-p1rvs1J80s5fy7t21CiW5bAug"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              <View style={{padding:3}}></View>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              <View style={{padding:3}}></View>
                <Avatar
                  medium
                  rounded
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
                <View style={{paddingTop: 5, paddingLeft: 8}}>
                  <Text style={{ fontSize: 30, color:'gray'}}>1</Text>
                </View>
              </View>
          </View>
          <View style={styles.date}>
            <Text style={{ fontSize: 18 }}>Tomorrow - 8/31/2018</Text>
          </View>
          <Divider style={{ backgroundColor: 'gray' }} />
          <View style={styles.activity}>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 5 }}>Phoenix Campus SOccer</Text>
            <Text style={{ fontSize: 19, paddingBottom: 5 }}>Friday 6v6</Text>
            <Text style={{ fontSize: 16, color: "gray", paddingBottom: 15 }}>5:00 PM - Tempe Beach Park</Text>
              <View style={{flexDirection: 'row'}}>
                <Avatar
                  medium
                  rounded
                  source={{uri: "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_Portrait_Theo_8538.jpg"}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  calendarHeader: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
  },
  activity: {
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 25,
  }
});
