import axios from 'axios';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {freelost, green, red} from '../constantes/constantes';
import Center from '../librairies/center';
import {store} from '../redux/redux';
// import LinearGradient

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // object_list: [],
      // temps_object_list: [],
      isLoading: true,
    };
  }

  trunc = function (n = 10, string = '') {
    // console.log(string);
    if (string == '' || string == null) {
      return string;
    }
    return string.substr(0, n - 1) + (string.length > n ? '...' : '');
  };

  // componentDidMount = ()
  render() {
    return (
      <ScrollView>
        {this.props.isLoading ? (
          <Center height={200}>
            <ActivityIndicator size={40} color={green} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: green}}>
              Loading
            </Text>
          </Center>
        ) : (
          <>
            {this.props.object_list.length == 0 ? (
              <Center height={300}>
                <Text
                  onPress={this.props.getObjects}
                  style={{color: red, fontSize: 19}}>
                  Aucun object trouve !!! ☹️
                </Text>
              </Center>
            ) : (
              <View
                style={[
                  styles.contenaireElements,
                  {backgroundColor: this.props.mode.white_To_black},
                ]}>
                {this.props.object_list.map(ele => (
                  <TouchableOpacity
                    key={ele._id}
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("Details d'un Object", {
                        otherData: ele,
                      })
                    }
                    style={[
                      styles.card,
                      styles.elevation,
                      {backgroundColor: this.props.mode.white_To_black_2},
                    ]}>
                    <Image
                      PlaceholderContent={<ActivityIndicator />}
                      style={styles.img}
                      source={
                        ele.Photo
                          ? {uri: freelost + ele.Photo}
                          : require('./../assets/images/logo.png')
                      }
                    />
                    <View
                      style={[
                        styles.heading,
                        {paddingHorizontal: 3},
                        // {borderWidth: 2, borderColor: green},
                      ]}>
                      <Text
                        style={[
                          styles.textMajeur,
                          {color: this.props.mode.sblack_To_sWhite},
                        ]}>
                        <FontAwesome5Icon
                          name="user"
                          size={15}
                          color={this.props.mode.sblack_To_sWhite}
                        />
                        {'   '}
                        {this.trunc(15, ele.UserNom)}
                      </Text>
                      <Text
                        style={[
                          styles.textMajeur,
                          {color: this.props.mode.sblack_To_sWhite},
                        ]}>
                        <Ionicons
                          name="location"
                          size={15}
                          color={this.props.mode.sblack_To_sWhite}
                        />
                        {'   '} {this.trunc(15, ele.Lieu)}
                      </Text>
                      <Text
                        style={[
                          styles.textMajeur,
                          {color: this.props.mode.sblack_To_sWhite},
                        ]}>
                        <MaterialCommunityIcons
                          name="account-details"
                          size={15}
                          color={this.props.mode.sblack_To_sWhite}
                        />
                        {'   '} {this.trunc(20, ele.Categorie)}
                      </Text>
                      <Text
                        style={[
                          styles.textMineur,
                          {color: this.props.mode.sblack_To_sWhite},
                        ]}>
                        <FontAwesome5Icon
                          name="file"
                          size={15}
                          color={this.props.mode.sblack_To_sWhite}
                        />
                        {'   '} {this.trunc(55, ele.Description)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    // height: 200,
    maxHeight: 250,
    minHeight: 200,
    borderRadius: 15,
  },
  textMajeur: {
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 15,
  },
  textMineur: {
    fontWeight: '600',
    fontSize: 14,
  },
  contenaireElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  heading: {
    flexDirection: 'column',
    // height: 70,
    maxHeight: 130,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontWeight: '600',
    paddingVertical: 2,
  },
  card: {
    paddingTop: 0,
    width: '48%',
    marginHorizontal: '1%',
    paddingBottom: 9,
    marginVertical: 7,
    paddingVertical: 2,
    borderRadius: 7,
  },
  elevation: {
    elevation: 13,
    shadowColor: '#676',
    shadowOpacity: 'red',
    shadowOffset: '#f5fffa',
    shadowRadius: 10,
    textShadowRadius: 10,
  },
});

const mapStateToProps = () => ({
  mode: store.getState().mode,
});
// const mapDispatchToProps = dispatch => {
//   return {
//     setLightAndDarkMode: mode => dispatch(setLightAndDarkMode(mode)),
//   };
// };

export default connect(mapStateToProps, null)(Article);
