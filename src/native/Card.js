
import React, {Component} from 'react';
import {View} from 'react-native';

export default function(props){
  return (
    <View {...props} style={[{backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 4}, props.disabled && {backgroundColor: 'rgba(255, 0, 0, 0.3)'}]}>
      {props.children}
    </View>
  )
}
