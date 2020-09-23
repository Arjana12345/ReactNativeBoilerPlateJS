import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class Home extends Component {
  
  render() {
    return (
      <View>

        <Text>
         Hello World.! 
         </Text>
         <View>
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
          <View>
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