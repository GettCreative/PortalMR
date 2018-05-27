import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';
import HelloWorldSceneAR from './Trex.js'
var InitialARScene = HelloWorldSceneAR
var sharedProps = {
	apiKey:"C56CA371-C465-48F7-A0E4-EC7B0F146BCC"
}


export default class Trex_AR extends Component{
	constructor(){
		super()
		this.state = {
			sharedProps:sharedProps
	}
}
	render(){
	return this.getARscene()
	}

	getARscene(){
		return (
		<ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
			)
	}
}
