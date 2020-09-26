import React, { Component } from 'react';
import { View, } from 'react-native';
import { Text, Button, ThemeProvider } from 'react-native-elements'
import theme from '../template/theme'
import styles from '../template/styles'




export default class Home extends Component {



  render() {
  console.log(this.props.propsData);
  return (
    <View >
          <View style = {styles.container}>
              <Text h1>Without css</Text>
              <Text h1 h1Style = {styles.h1}>External css</Text>
              <Text h1 h1Style = {{ color: "green" }}>Internal css</Text>
          </View>
         
          <View style = {styles.lineStyle} />

          <View>
              <Text h1>Without css</Text>
              <Text h1 h1Style = {styles.h1}>External css</Text>
              <Text h1 h1Style = {{ color: "green" }}>Internal css</Text>
          </View>

          <View style = {styles.buttonContainer}>
            <View style = {{marginTop: 20}}>
                  <ThemeProvider theme={theme.primaryButton}>
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
              <View style = {{marginTop: 20}}>
                    <ThemeProvider theme={theme.defaultButton}>
                        <Button
                          title="Go to Register"
                          onPress={() => {
                            this.props.propsData.navigationData.navigate('Register', {
                              id: 1,
                              otherParam: 'anything you want here',
                            });
                          }}
                        />
                    </ThemeProvider>
            </View>

                       
          </View>
         


      
      
      
          </View>//main view
 


    );
  
  
  
  }//render


}//class