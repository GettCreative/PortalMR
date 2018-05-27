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
import VR from './VR.js'
var InitialVRScene = VR
var sharedProps = {
	apiKey:"C56CA371-C465-48F7-A0E4-EC7B0F146BCC"
}


export default class ARScene extends Component{
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
		<ViroVRSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} />
			)
	}
}