import * as React from 'react';
import { Text, View, StyleSheet, Alert, AppRegistry } from 'react-native';
import { Constants } from 'expo';
import { Avatar } from 'react-native-elements';
import { Badge, FormLabel, FormInput, FormValidationMessage, List, ListItem } from 'react-native-elements';
import { Card } from 'react-native-elements'; // Version can be specified in package.json
const list = [
  {
    title: 'User Name',
    subtitle: 'John Doe'
  },
  {
    title: 'Age',
    subtitle: '30'
  },
  {
    title: 'Gender',
    subtitle: 'Male'
  },
  {
    title: 'Height',
    subtitle: '5ft 11in'
  },
  {
    title: 'Weight',
    subtitle: '200'
  },
  {
    title: 'Location',
    subtitle: 'AEDR'
  }
]
export default class ProfilePage extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.image_view}>
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
            activeOpacity={0.7}
          />
        </View>
          <List>
            {
              list.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}

                />
              ))
            }
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    width: 380,
    height: 120
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
    image_view: {
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 20,
  },
});
