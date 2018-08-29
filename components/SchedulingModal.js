import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';

export default class SchedulingModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
  constructor(props) {
     super(props);
     this.closeAction = this.props.closeAction.bind(this);
  }

  render() {
   return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => this.closeAction()}>
          <View style={{marginTop: 22, height: 500}}>
              <Text>Here are your matches:</Text>

              <List containerStyle={{marginBottom: 20}}>
              {
                colleagueList.map((l) => (
                  <ListItem
                    roundAvatar
                    avatar={l.avatar_url}
                    key={l.name}
                    title={l.name}
                  />
                ))
              }
            </List>
          </View>
        </Modal>
   );
 }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

const colleagueList = [
  {
    name: 'Gaurav Panwar',
    avatar_url: require('../Media/talktoacolleague.png'),
    subtitle: 'Vice President'
  },
  {
    name: 'Tin Phan',
    avatar_url: require('../Media/talktoamentor.png'),
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Danielle Vanica',
    avatar_url: require(''),
    subtitle: ''
  },
  {
    name: 'Aditya Vikram',
    avatar_url: require(''),
    subtite: ''
  }
]

const mentorList = [
  {
    name: 'John F Ryan',
    avatar_url: require('../Media/talktoacolleague.png'),
    subtitle: 'Vice President'
  },
  {
    name: 'Thomas Waldron',
    avatar_url: require('../Media/talktoamentor.png'),
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Beth Gallagher',
    avatar_url: require(''),
    subtitle: ''
  }
]
