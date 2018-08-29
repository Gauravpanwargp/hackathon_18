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
              <Text style={styles.paragraph}>90/100</Text>
              <Text style={styles.paragraph}>You are doing a great job! Your wellness index is higher than 95% of your colleagues in AEDR.</Text>
            </Card>
            <Card title='August stats' style={{backgroundColor: 'skyblue'}}>
              <FlatList
                data={[
                  {key: '- Gratitudes expressed: 10'},
                  {key: '- Blue Rewards given: 14 times and total 10,000 points'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </Card>
            <Card title='Upcoming activities' style={{backgroundColor: 'steelblue'}}>
              <FlatList
                data={[
                  {key: '- Meeting Ramit in CSB football'},
                  {key: '- Learning networking skills from Mark Walter'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </Card>
          </ScrollView>
        </View>
    )
  }
}

//CARD CONTENT
const colleagueCardTitle = 'Connect with a Colleague';
const colleagueCardDescription = 'Meeting new people is great! This option is best for casual discussions or a quick cup of coffee.';
const mentorCardTitle = 'Connect with a Mentor';
const mentorCardDescription = 'Need a little career guidance? This option is best for career discussions with leadership from anywhere in the company.';
const counselorCardTitle = 'Connect with a Counselor';
const counselorCardDescription = 'For anything from excess stress to major life events, Amex is here for you. Take advantage of our onsite and telephonic counseling benefits - completely free and, of course, confidential. Connect to a counselor today and start feeling better.';
const ethicsCardTitle = 'Connect with the Ethics Experts';
const ethicsCardDescription = 'Unsure of what to do about a work situation or need to call something out? Connect anonymously to get the guidance you need.';
const wellnessCardTitle = 'Connect with a Wellness Coach';
const wellnessCardDescription = 'Celebrate Healthy Lifestyles! Connect to a Wellness Coach, for free, to get an assessment of your current habits and what you can do to live a healthier, happier life!';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    margin: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
