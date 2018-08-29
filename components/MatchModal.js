import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

export default class MatchModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
 constructor(props) {
    super(props);
        this.closeAction = this.props.closeAction.bind(this);
        this.state = {
          ColleagueMatches : [
            {
              name: 'Gaurav Panwar',
              avatar_url: require('../Media/People/gp.png'),
              subtitle: 'Remittances Platform - SE I'
            },
            {
              name: 'Tin Phan',
              avatar_url: require('../Media/People/tf.png'),
              subtitle: 'Remittances Platform - Eng I'
            },
            {
              name: 'Danielle Vanica',
              avatar_url: require('../Media/People/dv.png'),
              subtitle: 'Remittances Platform - Eng II'
            },
            {
              name: 'Aditya Vikram',
              avatar_url: require('../Media/People/av.png'),
              subtitle: 'Remittances Platform - SE I'
            }
          ]
      };
}


  render() {
   return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => this.closeAction()}>
          <View style={{marginTop: 22, height: 500}}>
              <Text>Hello World!</Text>
              <List containerStyle={{marginBottom: 20}}>
              {
                this.state.ColleagueMatches.map((l) => (
                  <ListItem
                    roundAvatar
                    avatar={l.avatar_url}
                    key={l.name}
                    title={l.name}
                    subtitle={l.subtitle}
                  />
                ))
              }
            </List>
              <Button
              onPress={() => this.closeAction()}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Confirm'/>
          </View>
        </Modal>
   );
 }

}
