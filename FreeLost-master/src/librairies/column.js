import React from 'react';
import {StyleSheet, View} from 'react-native';

class Column extends React.Component {
  render = () => {
    return (
      <View
        style={[
          {
            width: this.props.width,
            height: this.props.height,
          },
          {
            justifyContent: this.props.justify ? this.props.justify : 'flex-start',
            alignItems: this.props.alignI ? this.props.alignI : 'center',
          },
          columnStyle.column,
          {...this.props.style},
        ]}>
        {this.props.children}
      </View>
    );
  };
}

const columnStyle = StyleSheet.create({
  column: {
    display: 'flex',
    flexDirection: 'column',
    // borderColor: 'black',
    // borderWidth: 1,
    backgroundColor: 'white',
  },
});

export default Column;
