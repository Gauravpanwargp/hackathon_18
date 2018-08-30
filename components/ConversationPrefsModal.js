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
          <View>
              <Text>     </Text>

                         <MultiSelect
			                hideTags
			                items={this.props.itemList}
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
