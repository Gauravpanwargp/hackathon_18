import React, { Component } from 'react';
import { ProgressBarAndroid, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'
import AppHeader from './AppHeader'

export default class Dashboard extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'skyblue',
        }}>
          <ScrollView>
            <Card title='Wellness Index' style={{backgroundColor: 'powderblue'}}>
              <Text>90/100</Text>
              <Text>You are doing a great job! Your wellness index is higher than 95% of your colleagues in AEDR.</Text>
            </Card>
            <Card title='August stats' style={{backgroundColor: 'skyblue'}}>
              <FlatList
                data={[
                  {key: '- Gratitudes expressed: 10'},
                  {key: '- Blue Rewards given: 14 times and total 10,000 points'},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
              />
            </Card>
            <Card title='Upcoming activities' style={{backgroundColor: 'steelblue'}}>
              <FlatList
                data={[
                  {key: '- Meeting Ramit in CSB to talk about football'},
                  {key: '- Learning networking skills from Mark Walter'},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
              />
            </Card>
          </ScrollView>
        </View>
    )
  }
}
