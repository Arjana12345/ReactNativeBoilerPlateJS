import React, { Component } from 'react';
import {
  View,
  ScrollView,

  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button, Text, Input, } from 'react-native-elements';
import theme from '../template/theme';
import styles from '../template/styles';


export default class Login extends Component {
  
  render() {
    console.log(this.props.propsData);
    return (
   <ScrollView style={styles.scroll}>
   
         <View>
       
            <Text style={styles.endText} onPress={() => console.log('Forgot Password')}>
            Forgot Password
            </Text>

         </View>
   
      

      <View style={styles.inputView}>
         
            <Input
                label = "Enter Username or Email"
                labelStyle = {styles.label}
                containerStyle = {styles.inputContainer}
                inputStyle = {styles.inputStyle}
                placeholder='Username or Email'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='blue'
                    />
                    }
            />
      
      </View> 

      <View style={styles.inputView}>
            
            <Input 
                label = "Enter Password"
                labelStyle = {styles.label}
                containerStyle = {styles.inputContainer}
                placeholder="Password"
                secureTextEntry={true} 
                leftIcon={
                    <Icon
                    name='key'
                    size={24}
                    color='blue'
                    />
                }
            
            />

      </View>
    
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text h2 h2Style = {styles.h2}> Connect</Text>
            <Text h3 h3Style = {styles.h3}> with  Facebook</Text>
            
        </View>
           
        <View style={styles.loginFooter}>
           
                <ThemeProvider theme={theme.primaryButton}>
                    <Button 
                        title="Sign In"
                        style = {{marginBottom: 20}} 
                        onPress={() => alert('Simple Button pressed')}
                    />
                </ThemeProvider>
            
                <ThemeProvider theme={theme.defaultButton}>
                    <Button 
                        title="CANCEL"
                        style = {{marginBottom: 20}}
                        onPress={() => alert('Simple Button pressed')}
                    />
                </ThemeProvider>
            
      </View>

      </ScrollView>
    );
  }
}