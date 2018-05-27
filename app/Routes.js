import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/Login.js'
import Gallery from './components/Gallery'
import Signup from './components/Signup.js'
//----------------------------------VR---------------------------------
import Planet_Scene from './VR_Scenes/planet/planet_VRScene.js'
import Dino_Scene from './VR_Scenes/dino/diono_VRScene.js'
// import heart_Scene from './VR_Scenes/hreat/heart_VRScene.js'
import shark_Scene from './VR_Scenes/shark/shark_VRScene .js'
import skeleton_Scene from './VR_Scenes/skeleton/skeleton_VRScene.js'
//----------------------------AR---------------------------------------
import Trex_AR from './AR_Scenes/TRex_AR/Trex_ARScene.js'
import Planet_AR from './AR_Scenes/planet_AR/planet_ARScene.js'
import Shark_AR from './AR_Scenes/shark_AR/shark_ARScene.js'
import Heart_AR from './AR_Scenes/heart_AR/heart_ARScene.js'
// import Trex_AR from './AR_Scenes/TRex_AR/Trex_ARScene.js'

export default class Routes extends React.Component {
  render(){
    return(
      <Router>

        <Stack key = "root" hideNavBar = {true}>
          <Scene key = "login" component = {Login} title="Login" />
          <Scene key = "gal" component = {Gallery} title="gal" />
          <Scene key = "signup" component = {Signup} title="Signup" initial = {true}/>
          <Scene key = "vrplanet" component = {Planet_Scene} title = "vrplanet"/>
          <Scene key = "vrdino" component = {Dino_Scene} title = "vrdino"/>
          <Scene key = "vrshark" component = {shark_Scene} title = "vrshark"/>
          <Scene key = "arshark" component = {Shark_AR} title = "arshark"/>
          <Scene key = "arplanet" component = {Planet_AR} title = "arplanet"/>
          <Scene key = "ardino" component = {Trex_AR} title = "ardino"/>
          <Scene key = "arheart" component = {Heart_AR} title = "arheart"/>

        </Stack>
      </Router>
    )
  }
}
