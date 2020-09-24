import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements'


export default class Home extends Component {

  render() {
    const theme = {
      Button: {
     titleStyle: {
        color: 'green',
      },
      buttonStyle:{
        backgroundColor:'red'
      },
    },
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
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
         <ThemeProvider theme={theme}>
            <Button
              title="Go to Login"
             onPress={() => {
                this.props.propsData.navigationData.navigate('Login', {
                  id: 1,
                  otherParam: 'anything you want here',
                });
              }}
            />
            </ThemeProvider>
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