import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements'
import ChatTile from './ChatTile'
import ExecriseTile from './ExecriseTile'
import AppHeader from './AppHeader'
import ConversationCard from './ConversationCard';
import Communications from 'react-native-communications';
import ConversationPrefsModal from './ConversationPrefsModal';
import MatchModal from './MatchModal';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colleaguePrefsVisible : false,
      mentorPrefsVisible : false,
      colleagueMatch : false,
      mentorMatch : false
    }
  }
    connectToEthics() {
      Alert.alert(
        'Connect to Ethics Hotline',
        'The Ethics Hotline is available via phone or online form. Choose which option works best for you.',
        [
          {text: 'Nevermind', style: 'cancel'},
          {text: 'Call Ethics Hotline', onPress: () => Communications.phonecall('1-844-439-4696', true)},
          {text: 'Report Online', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
    connectToCounselor() {
      Alert.alert(
        'Speak to a Counselor',
        'Lisa Berry is your onsite counselor. You can also call to speak someone now. Choose which option works best for you.',
        [
          {text: 'Nevermind', style: 'cancel'},
          {text: 'Call Healthy Minds', onPress: () => Communications.phonecall('1-855-3-MY-AMEX', true)},
          {text: 'Schedule with Lisa', onPress: () => Communications.phonecall('602-537-2002', true)},
        ],
        { cancelable: false }
      )
    }
    connectToAColleague() {
      this.setState({colleaguePrefsVisible:true});
    }
    connectToAMentor() {
      this.setState({mentorPrefsVisible:true});
    }
    findMatch() {
      this.setState({colleaguePrefsVisible:false});
      this.setState({colleagueMatch:true});
    }
    connectToWellness(){
      Alert.alert(
        'Speak to a Wellness Coach',
        'Kris Bio is your site\'s Wellness Coach. Choose which scheduling option works best for you.',
        [
          {text: 'Nevermind', style: 'cancel'},
          {text: 'Schedule via Email', onPress: () => Communications.email(['Kristin.Bio@aexp.com'],null,null,'New wellness coaching appointment','Hello! I am interested in setting up a wellness session with you.')},
          {text: 'Schedule via Phone', onPress: () => Communications.phonecall('602-537-8304', true)}
        ],
        { cancelable: false }
      )
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader title={'Chat'}/>
	    <ScrollView>
	        <Text style={styles.paragraph}>
	        Need to talk things out? We're here to help.
	        </Text>
	        <ConversationCard title={colleagueCardTitle} text={colleagueCardDescription} image={require('../Media/talktoacolleague.png')} action={() => this.connectToAColleague()}/>
	        <ConversationPrefsModal showModal={this.state.colleaguePrefsVisible} closeAction={()=> this.setState({colleaguePrefsVisible:false})} confirmAction={()=> this.findMatch()}/>
          <MatchModal isColleagueMatch={true} showModal={this.state.colleagueMatch} closeAction={()=>this.setState({colleagueMatch:false})} />
	        <ConversationCard title={mentorCardTitle} text={mentorCardDescription} image={require('../Media/talktoamentor.png')} action={() => this.connectToAMentor()}/>
	        <ConversationPrefsModal showModal={this.state.mentorPrefsVisible} closeAction={()=> this.setState({mentorPrefsVisible: false})} confirmAction={()=>this.findMatch()}/>
          <MatchModal isColleagueMatch={false} showModal={this.state.mentorMatch} closeAction={()=>this.setState({mentorMatch:false})}/>
	        <ConversationCard title={counselorCardTitle} text={counselorCardDescription} image={require('../Media/talktoacounselor.png')} action={() => this.connectToCounselor()}/>
	        <ConversationCard title={wellnessCardTitle} text={wellnessCardDescription} image={require('../Media/talktoawellnesscoach.png')} action={() => this.connectToWellness()}/>
	        <ConversationCard title={ethicsCardTitle} text={ethicsCardDescription} image={require('../Media/talktoethicshotline.png')} action={() => this.connectToEthics()}/>
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
	margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
