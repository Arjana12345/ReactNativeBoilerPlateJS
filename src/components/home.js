import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'


export default class Home extends Component {

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
        // backgroundColor: '#FF0000',
        // borderColor: 'green',
        width: '40%',
        height: 40,
      }
    });

console.log(this.props.propsData);

    return (
      <View style={styles.container}>

        <Text>
         Hello World.! 
         </Text>
         <View style={styles.button}>
            <Button
              title="Go to Login"
              buttonStyle={{
                backgroundColor:'red'
              }}
              onPress={() => {
                this.props.propsData.navigationData.navigate('Login', {
                  id: 1,
                  otherParam: 'anything you want here',
                });
              }}
            />
          </View>
          <View style={styles.button}>
          <Button
            title="Go to Register"
            buttonStyle={{
              backgroundColor:'red'
            }}
            onPress={() => {
              this.props.propsData.navigationData.navigate('Register', {
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