import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button} from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

export default class ConversationPrefsModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
 constructor(props) {
    super(props);
        this.closeAction = this.props.closeAction.bind(this);
        this.confirmAction = this.props.confirmAction.bind(this);
	      this.state = {
	        selectedItems: []
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
          <View style={{marginTop: 22, height: 500}}>
              <Text>Hello World!</Text>
                         <MultiSelect
			                hideTags
			                items={items}
			                uniqueKey="id"
			                ref={(component) => { this.multiSelect = component }}
			                onSelectedItemsChange={this.onSelectedItemsChange}
			                selectedItems={this.state.selectedItems}
			                selectText="Pick Items"
			                searchInputPlaceholderText="Search Items..."
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
			                submitButtonText="Submit"
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
const items = [{
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
  }, {
    id: '16',
    name: 'Cars',
  }];
