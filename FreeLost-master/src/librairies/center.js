import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <View style={[
          {
            width: this.props.width ? this.props.width : '100%',
            height: this.props.height,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: this.props.bdRadius,
          },
          {...this.props.style}
      ]}>
        {this.props.children}
      </View>
    )
  }
}