import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class Home extends Component {
  
  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
      }
    });

    return (
      <View style={styles.container}>

        <Text>
         Hello World.! 
         </Text>
         <View style={styles.button}>
            <Button
              title="Go to Login"
              onPress={() => {
                this.props.navigation.navigate('Login', {
                  id: 1,
                  otherParam: 'anything you want here',
                });
              }}
            />
          </View>
          <View style={styles.button}>
          <Button
            title="Go to Register"
            onPress={() => {
              this.props.navigation.navigate('Register', {
                id: 1,
                otherParam: 'anything you want here',
              });
            }}
          />
          </View>

      </View>
    );
  }
}