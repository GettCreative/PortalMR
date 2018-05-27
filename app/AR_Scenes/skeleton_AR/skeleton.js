'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroARPlaneSelector,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
    <ViroARScene>
      <ViroARPlaneSelector />
        <ViroAmbientLight color="#ffffff" intensity={200}/>
          <ViroPortalScene passable={true} dragType="FixedDistance" >
            <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>

              <Viro3DObject source={require('./portal_res/HeartFinal/Heart_.obj')}
                resources={[require('./portal_res/HeartFinal/Heart_2048.jpg'),
                            require('./portal_res/HeartFinal/heartDiagram.jpg')]}
                    type="OBJ"/>

            </ViroPortal>
              </ViroPortalScene>
            </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "HEY RBK!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});



module.exports = HelloWorldSceneAR;
