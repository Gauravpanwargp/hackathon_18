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
}


  render() {
   return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => this.closeAction()}>
          <View style={{marginTop: 22, height: 500}}>
              <Text>Here are your best matches. Please pick one to connect with them.</Text>
              <List containerStyle={{marginBottom: 20}}>
              {
                this.props.matchList.map((l) => (
                  <ListItem
                    roundAvatar
                    avatar={l.avatar_url}
                    key={l.name}
                    title={l.name}
                    subtitle={l.subtitle}
                    onPress={()=>Alert.alert('Connect via Slack', 'Reach out to this person via slack to find some time to meet!',[
                      {text: 'Nevermind', style: 'cancel'},
                      {text: l.slack, style:'cancel'}
                    ], {})}
                  />
                ))
              }
            </List>
              <Button
              onPress={() => this.closeAction()}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Cancel'/>
          </View>
        </Modal>
   );
 }

}
