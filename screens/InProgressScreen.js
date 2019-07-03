import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class InProgressScreen extends React.Component {
  static navigationOptions = {
    title: 'In progress',
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>In Progress Screen!!</Text>
      </View>
    );
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
