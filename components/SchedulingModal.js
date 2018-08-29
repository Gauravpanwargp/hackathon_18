import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert, Modal } from 'react-native';
import {Button} from 'react-native-elements';
import {Agenda} from 'react-native-calendars';

export default class SchedulingModal extends React.Component {
  //properties:
  //this.props.showModal
  //this.props.topics=> interests if colleague, professional topics if
 constructor(props) {
    super(props);
    this.state= {
      meetings:{
  '2018-08-29':[{name:'1:1 With Director', height:30, description:'OB2-2113', time: '09:00-09:30'}],
  '2018-08-30':[]
}
    }
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
                <Agenda   items={this.state.meetings}
              // callback that gets called on day press
              onDayPress={(day)=>{console.log('day pressed')}}
              // callback that gets called when day changes while scrolling agenda list
              onDayChange={(day)=>{console.log('day changed')}}
              // initially selected day
              selected={'2018-08-29'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2018-08-28'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2018-12-31'}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={2}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={10}
              // specify how each item should be rendered in agenda
              renderItem={(item, firstItemInDay) => {return (<View style={[styles.item, {height: item.height}]}><Text>{item.time}</Text><Text>{item.name}</Text><Text>{item.description}</Text></View>)}}
              // specify how empty date content with no items should be rendered
              renderEmptyDate={() => {return (<View style={styles.emptyDate}><Text>You have nothing scheduled today!</Text></View>);}}
              renderEmptyData={() => {return (<View style={styles.emptyDate}><Text>You have nothing scheduled today!</Text></View>);}}
              // specify your item comparison function for increased performance
              rowHasChanged={(r1, r2) => {return r1.name !== r2.name}}
              // agenda theme
              theme={{
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
              }}
              // agenda container style
              style={{}}/>
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
const timeBlocks = [
  '07:00', '08:00', '09:00', '10:00'
]
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
