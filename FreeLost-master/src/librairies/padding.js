import { View } from 'react-native'
import React, { Component } from 'react'

export default class Padding extends Component {
  render() {
    return (
      <View style={[
        {
          width: '100%',
          height: this.props.height,
          overflow: 'hidden',
          padding: this.props.all,
          paddingBottom: this.props.pBottom,
          paddingTop: this.props.pTop,
          paddingLeft: this.props.pLeft,
          paddingRight: this.props.pBottom,
          paddingHorizontal: this.props.pHorizontal,
          paddingVertical: this.props.pVertical,
        },
        // {
        //   borderColor: 'black',
        //   borderWidth: 2,
        // },
        {...this.props.style}
    ]}>
        {this.props.children}
      </View>
    )
  }
}