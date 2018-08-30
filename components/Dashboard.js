import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import { Card, Button, Divider, Slider, Icon } from 'react-native-elements'
import AppHeader from './AppHeader'

export default class Dashboard extends React.Component {
  constructor(props) {super(props); this.state={value:5}};
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
          <ScrollView>
          <Card>
            <View style={{
              flexDirection: 'row'
            }}>
              <Image
                style={{width: 85, height: 85}}
                source={require('../Media/feelingsscale.png')}
              />
              <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>    HOW ARE YOU FEELING?</Text>
            </View>
            <Text>                             </Text>
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>

              <Slider
                maximumValue={10}
                step={1}
                value={this.state.value}
                onValueChange={(value) => this.setState({value})} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom:10}}>
                <Icon name="emoji-sad" type="entypo" />
                <Icon name="emoji-neutral" type="entypo"/>
                <Icon name="emoji-happy" type="entypo"/>
                </View>
</View>
<Button
backgroundColor='#03A9F4'
onPress={()=>this.setState({value:5})}
buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
title='Submit'/>
          </Card>
            <Card>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  style={{width: 85, height: 85}}
                  source={require('../Media/wellness.jpeg')}
                />
                <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>    DHI SCORE: 81.2/100</Text>
              </View>
              <Text>                             </Text>
              <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>You are doing a great job! Your Dhi Score is higher than 95% of your colleagues in AEDR.</Text>
            </Card>
            <Card>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  style={{width: 85, height: 85}}
                  source={require('../Media/stats.png')}
                />
                <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>    AUGUST STATS</Text>
              </View>
              <FlatList
                data={[
                  {key: '- Connections Completed: 3'},
                  {key: '- Activities Completed: 2'},
                  {key: '- Blue Rewards given: 14 times & 10k total points'},
                ]}
                renderItem={({item}) => <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>{item.key}</Text>}
              />
            </Card>
            <Card>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image
                  style={{width: 85, height: 85}}
                  source={require('../Media/activities.jpg')}
                />
                <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>    UPCOMING ACTIVITIES</Text>
              </View>
              <FlatList
                data={[
                  {key: '                          '},
                  {key: '- Meeting Michael in CSB to talk about football'},
                  {key: '- Learning networking skills from Mark Walter'},
                  {key: '- Playing volleyball at 5pm'},
                ]}
                renderItem={({item}) => <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>{item.key}</Text>}
              />
            </Card>
          </ScrollView>
        </View>
    )
  }
}
