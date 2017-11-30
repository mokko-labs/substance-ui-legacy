
import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function(props){
  return (
    <TouchableOpacity {...props} style={[{backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 4}, props.disabled && {backgroundColor: 'rgba(255, 0, 0, 0.3)'}]}>
      <Text style={{color: 'white'}}>Button</Text>
    </TouchableOpacity>
  )
}
