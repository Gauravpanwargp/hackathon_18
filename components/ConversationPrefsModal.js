import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button, Divider, CheckBox} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

import AppHeader from './AppHeader'

export default class ConversationPrefsModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
 constructor(props) {
    super(props);
        this.closeAction = this.props.closeAction.bind(this);
        this.confirmAction = this.props.confirmAction.bind(this);
	      this.state = {
	        selectedItems: [],
          checked: false,
          checked2: false
      };
}
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    console.log(this.state);
  };

  render() {
   return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => this.closeAction()}>
          <View>

          <AppHeader title={'CONNECT PREFERENCES'} />
          <View style={{height:475}}>
          <MultiSelect
            items={this.props.itemList}
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            selectText="Pick Topics"
            searchInputPlaceholderText="Search Topics..."
            onChangeInput={ (text)=> console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#CCC"
            submitButtonText="Save"
            />
            </View>
            <Divider style={{ backgroundColor: 'gray' }}/>
            <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>Location Preferences:</Text>
            <CheckBox
              title='My Location - AEDR'
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
              />
            <CheckBox
              title='Virtual'
              checked={this.state.checked2}
              onPress={() => this.setState({checked2: !this.state.checked2})}
              />
            <Button
            onPress={() => this.confirmAction()}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Confirm'/>
          </View>
        </Modal>
   );
 }

}
