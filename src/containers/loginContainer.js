import React, { Component } from "react";
import { connect } from 'react-redux';
import { View } from 'react-native';

import { test } from '../actions/loginAction';
import Login from '../components/login';


class LoginContainer extends React.Component{

   constructor(props) {
      super(props);
   
      
   }
  
    handleChange = (event) => {
      console.log(event.target.name);
      console.log(event.target.value);
      console.log(event.target.type);
      console.log('handleOnChange Called');
      let payload = {fieldName: event.target.name,
                     fieldValue: event.target.value
                   };
      this.props.handleChangeAction(payload);

  }
  
   render() {

        console.log(this.props.testData);
        console.log(this.props.navigation);
        let propsData = {
            stateData : this.props.testData,
            navigationData : this.props.navigation
        }
         return (
         <View>
            <Login propsData = {propsData} onChange={this.handleChange.bind(this)} />
         </View>
         );
      }
      

} 


const mapStateToProps = state => ({
  testData: state
});


const mapDispatchToProps = (dispatch) => ({
  
   handleChangeAction: (payload) => dispatch(test(payload))
   
 })

export default connect(
   mapStateToProps , 
   mapDispatchToProps
   )(LoginContainer);
