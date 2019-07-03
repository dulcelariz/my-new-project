import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class OrdersdScreen extends React.Component {
  static navigationOptions = {
    title: 'All Orders',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>All Orders Screen!!</Text>
        <Button title="Go to InProgressScreen" onPress={this._goToInProgress}/>
        <Button title="Go to DetailScreen" onPress={this._goToDetail}/>
      </View>
    );
  }

  _goToInProgress = () => {
    this.props.navigation.navigate('InProgress');
  }

  _goToDetail = () => {
    this.props.navigation.navigate('Detail');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 100,
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  },
});

