import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import {Button, Card} from 'react-native-elements';


export default class ConversationCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonEvent = this.props.action.bind(this);
  }
  handleButtonEvent;
 render() {
   return (
     <View style={styles.container}>
     <Card title={this.props.title} image={this.props.image}>
     <Text style={styles.paragraph}>
     {this.props.text}
     </Text>
     <Button
       rightIcon={{name: 'chevron-right'}}
       backgroundColor='#03A9F4'
       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
       title='CONNECT NOW'
       onPress={() => this.handleButtonEvent()}
       />
     </Card>



     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 paragraph: {
   margin: 18,
   marginTop: 0,
   fontSize: 14,
   textAlign: 'center',
   color: '#34495e',
 }
});
