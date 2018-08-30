import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'
import AppHeader from './AppHeader'

export default class Dashboard extends React.Component {
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
                  source={require('../Media/wellness.jpeg')}
                />
                <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>    WELLNESS INDEX: 91.2/100</Text>
              </View>
              <Text>                             </Text>
              <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>You are doing a great job! Your wellness index is higher than 95% of your colleagues in AEDR.</Text>
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
                  {key: '                          '},
                  {key: '- Gratitudes expressed: 10'},
                  {key: '- Blue Rewards given: 14 times & 10k points'},
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
