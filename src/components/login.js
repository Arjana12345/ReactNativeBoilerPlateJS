import React, { Component } from 'react';
import {
  View,
  ScrollView,

  
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Button, Text, Input, } from 'react-native-elements';
import theme from '../template/theme';
import styles from '../template/styles';
import { Field, reduxForm } from 'redux-form'



class Login extends Component {


    onFieldChange(event) {
      // for a regular input field, read field name and value from the event
      console.log(event.target.name);
      console.log(event.target.type);
      console.log(event.target.value);
      console.log('onFieldChange');
  }
 
  handleSubmit(){
    //console.log(this.props.propsData);
    console.log('handle submit component');
    this.props.onClick();
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
   
    return( 
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
        {...input}
        />
      </View>
      
        
     
    )
  };

  SecurityTextInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
   
    return( 
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
        {...input}
        />
      </View>
      
        
     
    )
  };
 
  render() {
   // console.log(this.props.propsData);
    const { navigate } = this.props.propsData.navigationData;
   
    function handleClick () {
          navigate('ForgotPassword');
        
      }


    return (
   <ScrollView style={styles.scroll}>
  
         <View>
       
            <Text style={styles.endText}  onPress={handleClick} >
            Forgot Password
            </Text>

         </View>
   
      
          <Field name="username" component={this.renderInput} 
              onChange={this.onFieldChange.bind(this)} 
              />
       
          <Field name="password" component={this.SecurityTextInput} 
           />
      
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
                    onPress= {this.handleSubmit.bind(this)}
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

export default reduxForm({
  form: 'LoginForm'
})(Login)