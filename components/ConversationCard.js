import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';



export default class ConversationCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonEvent = this.props.action.bind(this);
  }
  handleButtonEvent;
 render() {
   return (
     //<View style={styles.container}>
/*     <Card title={this.props.title} image={this.props.image} titleStyle={{ fontSize: 19, paddingBottom: 5 }}>
     <Text style={{ fontSize: 16, color: "gray", paddingBottom: 15 }}>
     {this.props.text}
     </Text>
     <Button
       rightIcon={{name: 'chevron-right'}}
       backgroundColor='#03A9F4'
       buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
       title='CONNECT NOW'
       onPress={() => this.handleButtonEvent()}
       />
     </Card>*/
     <TouchableOpacity onPress={() => this.handleButtonEvent()}>
     <Card>
       <View style={{flexDirection: 'row'}}>
         <Image
           style={{width: 85, height: 85}}
           source={this.props.image}
         />
         <Text style={{ fontSize: 19, paddingBottom: 5, textAlign:"right", textAlignVertical:"center" }}>{this.props.title}</Text>
         <Icon name="chevron-right" />
       </View>
       <Text>                             </Text>
       <Text style={{fontSize: 16, color:'gray', paddingBottom: 5}}>{this.props.text}</Text>
     </Card>
     </TouchableOpacity>
     //</View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   justifyContent: 'center',
 }
});
