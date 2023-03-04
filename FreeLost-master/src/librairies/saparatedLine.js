import {View} from 'react-native';
import React, {Component} from 'react';
import Center from './center';
import {green} from '../constantes/constantes';
import Padding from './padding';

export default class SeparateLine extends Component {
  render() {
    return (
      <Center>
        <Padding all={this.props.padding ? this.props.padding : 1}>
          <View
            style={[
              {
                width: this.props.width ? this.props.width : '98%',
                paddingVertical: this.props.height ? this.props.height : 0.5,
                backgroundColor: this.props.bgColor
                  ? this.props.bgColor
                  : green,
              },
              {...this.props.style},
            ]}></View>
        </Padding>
      </Center>
    );
  }
}
