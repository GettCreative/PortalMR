'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Video,
} from 'react-viro';

export default class VR extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Video source={{uri: 'https://salsabeelvideos.s3.us-west-2.amazonaws.com/planet+%281%29.mp4'}} />
      </ViroScene>
    );
  }

}

// var styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     // fontFamily: 'Arial',
//     fontSize: 60,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });
