import React from 'react';
import {
 StyleSheet,
 Button,
 Text,
 View } from 'react-native';

export default class LoginScreen extends React.Component {
 static navigationOptions = {
   header: null,
 };

 render() {
   return (
     <View style={styles.container}>
       <Text style={styles.title}> LoginScreen </Text>
       <Button
         color="#4CAF50"
         title="Test Login"
         onPress={this._testLogin}
       />
     </View>
   )
 }

 _testLogin = () => {
   this.props.navigation.navigate('Main');
 };
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
 }
});
