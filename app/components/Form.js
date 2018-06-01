import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }
  login(){
    var that = this
    if(this.state.email.length && this.state.password.length !==0){
    fetch('http://portal-mr.herokuapp.com/login', { //Please use your IP Address
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password:that.state.password,
        email:that.state.email
      }),
    }).then((responsedata) => {
        if(responsedata.status === 200){


          alert('Welcome To Portal')

          Actions.gal()
        }else{
          alert("Username or Password is incorrect!")
        }
    })
  }
  else{alert("Please fill all your information!")}
}


  render (){
    return(
      <View style = {styles.container} >
        <TextInput
          onChangeText={(email) => this.setState({email})}
          style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = 'Email'
          placeholderTextColor = '#ffffff'
          selectionColor = '#fff'
          keyboardType = "email-address" // to show @ in keyboard for easier UX
          onSubmitEditing={()=> this.password.focus()}
        />

        <TextInput
          onChangeText={(password) => this.setState({password})}
          style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0,0,0,0)'
          placeholder = 'Password'
          secureTextEntry = {true}
          placeholderTextColor = '#ffffff'
          ref = {(input) => this.password = input}
        />

        <TouchableOpacity onPress={this.login.bind(this)} style={styles.button}>

          <Text style = {styles.buttonText}>{this.props.type}</Text>

        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    height: 40,
    borderBottomColor: '#1E88E5',
    borderBottomWidth: 1,
    paddingBottom: 5,
    color: '#fff',
    marginBottom: 30
  },

  button: {
    width: 300,
    backgroundColor: '#1E88E5',
    marginVertical: 15,
    paddingVertical: 12

  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})
