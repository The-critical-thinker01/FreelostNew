import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class Row extends Component{


    render = ()=>{


        return(
            <View style={[
                {
                    width: this.props.width,
                    height: this.props.height,
                },
                {
                    justifyContent: this.props.justify ? this.props.justify: "flex-start",
                    alignItems: this.props.alignI ? this.props.alignI : "center",
                },
                rowStyle.row,
                {...this.props.style},
            ]} >
                {this.props.children}
            </View>
        )
    }
}

const rowStyle = StyleSheet.create({
    row:{
        display : "flex",
        flexDirection: 'row'
    }
})

export default Row;