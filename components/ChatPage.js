import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';
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
    findMentorMatch() {
      this.setState({mentorPrefsVisible:false});
      this.setState({mentorMatch:true});
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
        <AppHeader title={'CONNECT'}/>
	    <ScrollView>
	        <ConversationCard title={colleagueCardTitle} text={colleagueCardDescription} image={require('../Media/talktoacolleague.png')} action={() => this.connectToAColleague()}/>
          <ConversationPrefsModal showModal={this.state.colleaguePrefsVisible} itemList={personalItems} closeAction={()=> this.setState({colleaguePrefsVisible:false})} confirmAction={()=> this.findMatch()}/>
          <MatchModal matchList={colleagueMatches} showModal={this.state.colleagueMatch} closeAction={()=>this.setState({colleagueMatch:false})} />
	        <ConversationCard title={mentorCardTitle} text={mentorCardDescription} image={require('../Media/talktoamentor.png')} action={() => this.connectToAMentor()}/>
	        <ConversationPrefsModal showModal={this.state.mentorPrefsVisible} itemList={professionalItems} closeAction={()=> this.setState({mentorPrefsVisible: false})} confirmAction={()=>this.findMentorMatch()}/>
          <MatchModal matchList={mentorMatches} showModal={this.state.mentorMatch} closeAction={()=>this.setState({mentorMatch:false})}/>
	        <ConversationCard title={counselorCardTitle} text={counselorCardDescription} image={require('../Media/talktoacounselor.png')} action={() => this.connectToCounselor()}/>
	        <ConversationCard title={wellnessCardTitle} text={wellnessCardDescription} image={require('../Media/talktoawellnesscoach.png')} action={() => this.connectToWellness()}/>
	        <ConversationCard title={ethicsCardTitle} text={ethicsCardDescription} image={require('../Media/talktoethicshotline.png')} action={() => this.connectToEthics()}/>
	    </ScrollView>
      </View>

    )
  }
}

//CARD CONTENT
const colleagueCardTitle = '    Connect with a Colleague';
const colleagueCardDescription = 'Meeting new people is great! This option is best for casual discussions or a quick cup of coffee.';
const mentorCardTitle = '    Connect with a Mentor';
const mentorCardDescription = 'Need a little career guidance? This option is best for career discussions with leadership from anywhere in the company.';
const counselorCardTitle = '    Counselling Services';
const counselorCardDescription = 'Take advantage of Amex\'s onsite and telephonic counseling benefits - completely free and, of course, confidential.';
const ethicsCardTitle = '    Ethics Experts Hotline';
const ethicsCardDescription = 'Unsure of what to do about a work situation or need to call something out? Connect anonymously to get the guidance you need.';
const wellnessCardTitle = '    Wellness Coach Hotline';
const wellnessCardDescription = 'Celebrate Healthy Lifestyles! Connect to a Wellness Coach, for free, to get an assessment of your current habits and lifestyle!';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 5,
  },
  paragraph: {
	margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

const personalItems = [{
    id: '0',
    name: 'Any Topic',
  }, {
    id: '01',
    name: 'Coffee',
  },{
    id: '1',
    name: 'Sports - Football (American)',
  }, {
    id: '2',
    name: 'Sports - Football (Soccer)',
  }, {
    id: '4',
    name: 'Sports - General',
  }, {
    id: '5',
    name: 'Technology - Cryptocurrencies',
  }, {
    id: '6',
    name: 'Technology - Quantum Computing',
  }, {
    id: '7',
    name: 'Technology - Trends',
  }, {
    id: '8',
    name: 'Technology - General',
  }, {
    id: '9',
    name: 'Outdoors - Hiking/Backpacking',
  }, {
    id: '12',
    name: 'Outdoors - Nature/General',
  }, {
    id: '13',
    name: 'Games - Video Games',
  }, {
    id: '14',
    name: 'Games - D&D',
  }];

  const professionalItems = [{
      id: '0',
      name: 'Any Topic',
    }, {
      id: '01',
      name: 'Leadership Skills',
    },{
      id: '1',
      name: 'Career Paths',
    }, {
      id: '2',
      name: 'Learn about an Org',
    }, {
      id: '4',
      name: 'Presentation Skills',
    }, {
      id: '5',
      name: 'Networking Strategies',
    }, {
      id: '6',
      name: 'Other',
    }];

    const colleagueMatches = [
      {
        name: 'Gaurav Panwar',
        avatar_url: require('../Media/People/gp.png'),
        subtitle: 'Remittances Platform - SE I',
        slack: '@G_Panwar'
      },
      {
        name: 'Tin Phan',
        avatar_url: require('../Media/People/tf.png'),
        subtitle: 'Remittances Platform - Eng I',
        slack: '@Tin'
      },
      {
        name: 'Danielle Vanica',
        avatar_url: require('../Media/People/dv.png'),
        subtitle: 'Remittances Platform - Eng II',
        slack: '@DanielleVanica'
      },
      {
        name: 'Aditya Vikram',
        avatar_url: require('../Media/People/av.png'),
        subtitle: 'Remittances Platform - SE I',
        slack: '@adityav'
      },
      {
        name: 'Niladri Bhattacharjya',
        avatar_url: require('../Media/People/nsb.png'),
        subtitle: 'Remittances Platform - SE II',
        slack: '@Niladri'
      }
    ];
   const mentorMatches = [
      {
        name: 'John F Ryan',
        avatar_url: require('../Media/People/jr.png'),
        subtitle: 'Remittances Platform - VP Tech III',
        slack: '@JohnRyan'
      },
      {
        name: 'Sandeep Bose',
        avatar_url: require('../Media/People/sb.png'),
        subtitle: 'IMDP - VP Tech I',
        slack: '@sandeepbose'
      },
      {
        name: 'Thomas Waldron',
        avatar_url: require('../Media/People/tw.png'),
        subtitle: 'Remittances Platform - Eng Director',
        slack: '@thomas'
      }
    ];
