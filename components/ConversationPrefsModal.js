import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button} from 'react-native-elements';

export default class ConversationPrefsModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
 constructor(props) {
    super(props);
}

  render() {
   return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, height: 500}}>
              <Text>Hello World!</Text>
              <Button onPress={() => {
                  this.props.showModal=false;
                  this.setState({visible: false})

              }}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='CLOSE'/>
          </View>
        </Modal>
   );
 }

}
