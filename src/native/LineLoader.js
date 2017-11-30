

import React, {Component} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function(props) {
  return (
    <Animatable.View animation="pulse" iterationCount="infinite" style={{backgroundColor: 'black', height: 2, width: '100%', position: 'absolute', top: 50}}>
      <Animatable.View animation="fadeInLeftBig" iterationCount="infinite" easing="ease-in-out" duration={3200} style={{width: '100%', height: 2, backgroundColor: '#dddddd'}} />
      <Animatable.View animation="fadeInRightBig" iterationCount="infinite" easing="ease-in-out" duration={1600} style={{width: '100%', height: 2, backgroundColor: '#dddddd'}} />
    </Animatable.View>
  )
}
