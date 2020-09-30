import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';

import { test } from '../actions/loginAction';
import Login from '../components/login';


class LoginContainer extends React.Component{

   constructor(props) {
      super(props);
   
      
   }

   handleChange = (e) => {

      let payload = {
         fieldName : e.target.name,
         fieldValue : e.target.value
      };

      this.props.handleChange(payload);

   }
   handleSubmit =() => {
     
      console.log(this.props.testData.form.LoginForm);
      console.log('handleSubmit ctrl');
      /**
       * We can fire action here:
       */
   
      //this.props.handleSubmit(this.props.testData.form.LoginForm);

   }
  
   render() {

        //console.log(this.props.testData);
        //console.log(this.props.navigation);
        let propsData = {
            stateData : this.props.testData,
            navigationData : this.props.navigation
        }
         return (
         <View>
            <Login propsData = {propsData} onClick={this.handleSubmit.bind(this)} />
         </View>
         );
      }
      

} 


const mapStateToProps = state => ({
  testData: state
});


const mapDispatchToProps = (dispatch) => ({
  
   handleChange: (payload) => dispatch(test(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(LoginContainer);
