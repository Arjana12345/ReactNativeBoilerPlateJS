import React, { Component } from 'react';
import {
 
  View,
  TextInput,
  ScrollView,
  Alert
  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button, Text, } from 'react-native-elements';
import theme from '../template/theme';
import styles from '../template/styles';


export default class Login extends Component {
  
  render() {
    console.log(this.props.propsData);
    return (
      <ScrollView style={styles.scroll}>
         <View style={styles.labelContainer}>

            <Text style={styles.endText} onPress={() => console.log('Forgot Password')}>
            Forgot Password
            </Text>

         </View>
   
      

      <View style={styles.labelContainer}>
          {/* <Label text="Username or Email" /> */}
          <Text style={styles.textLabel}>Username or Email</Text>
          <TextInput
           style={styles.textInput}
          />
      
      </View> 
      <View style={styles.labelContainer}>

      {/* <Label text="Password" /> */}
          <Text style={styles.textLabel}>Password</Text>
          <TextInput
             secureTextEntry={true}
              style={styles.textInput}
          />
      </View>

      

      <View style={styles.labelContainer}>
            {/* <Button 
                styles={{button: styles.transparentButton}}
                title=""
            > */}
                <View style={styles.inline}>
                    <Icon name="facebook-official" size={30} color="#3B5699" />
                    <Text h2 h2Style = {styles.h2}> Connect</Text>
                    <Text h3 h3Style = {styles.h3}> with  Facebook</Text>
                    {/* <Text style={[styles.lueText, styles.buttonBigText]}> Connect with  Facebook </Text>  */}
                     {/* <Text style={styles.buttonBlueText}> with  Facebook </Text> */}
                    
                </View>
            {/* </Button> */}
        </View>


        <View style={styles.footer}>
          <View style={styles.labelContainer}>
          <ThemeProvider theme={theme.primaryButton}>
              <Button 
                  title="Sign In"
                  //styles={{button: styles.primaryButton, textLabel: styles.buttonWhiteText}} 
                  onPress={() => Alert.alert('Simple Button pressed')}
              />
          </ThemeProvider>
          </View>
          <View style={styles.labelContainer}>
          <ThemeProvider theme={theme.defaultButton}>
              <Button 
                  title="CANCEL"
                  //styles={{textLabel: styles.buttonBlackText}} 
                  onPress={() => Alert.alert('Simple Button pressed')}
              />
          </ThemeProvider>
          </View>
      </View>

      </ScrollView>
    );
  }
}