import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Image, Input, SocialIcon} from 'react-native-elements';
import {freelost, green, grey, red} from '../constantes/constantes';
import Center from '../librairies/center';
import Column from '../librairies/column';
import Padding from '../librairies/padding';
import Row from '../librairies/row';
import SeparateLine from '../librairies/saparatedLine';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {connect} from 'react-redux';
import {addUserToReduxStore} from '../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserIsConnected} from '../redux/connectionSlice';

class Login extends Component {
  state = {
    isFormSubmited: false,
    nameOrEmail: '',
    password: '',
    errorSubmitedForm: '',
    ref: null,
  };

  constructor(props) {
    super(props);
    this.state.ref = React.createRef();
  }

  submitForm = async () => {
    if (this.state.nameOrEmail === '') {
      alert('Error : The Email or Name field is Empty 🧐 !!!');
      return;
    } else if (this.state.password === '') {
      alert('Error : The Password field is Empty 🧐 !!!');
      return;
    } else {
      this.setState({isFormSubmited: true});

      await axios
        .post(freelost + '/auth/signin', {
          email: this.state.nameOrEmail,
          password: this.state.password,
        })
        .then(async rps => {
          try {
            await AsyncStorage.setItem('user', JSON.stringify(rps.data));
          } catch (e) {
            console.log(e);
          }
          this.props.addUserToReduxStore(rps.data);
          this.props.setUserIsConnected();
        })
        .catch(err => {
          this.setState({errorSubmitedForm: err.response.data});
          Alert.alert(
            'error',
            err.response.data.error,
            [
              {
                text: 'ok',
                onPress: () => {},
                style: 'cancel',
              },
            ],
            {cancelable: true},
          );
        })
        .finally(() => this.setState({isFormSubmited: false}));
    }
  };

  render = () => {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={green} />
        <Center height={'100%'} style={{backgroundColor: green}}>
          <Center
            height={'90%'}
            bdRadius={20}
            style={{backgroundColor: 'white', overflow: 'hidden'}}>
            <Padding pHorizontal={10} height={'100%'}>
              <ScrollView ref={this.state.ref}>
                <Column>
                  <Center>
                    <View style={[loginStyles.topColoredBar]}></View>
                  </Center>
                  <Padding pVertical={2} pLeft={70}>
                    <Center>
                      <Image
                        source={require('./../assets/images/logo.png')}
                        style={{width: 250, height: 65}}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    </Center>
                  </Padding>
                  <Image
                    source={require('./../assets/images/freeLost.png')}
                    style={{width: 350, height: 180}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                  <Padding pVertical={4}>
                    <Center>
                      <Text style={[loginStyles.loginAccountText]}>
                        LOGIN ACCOUNT
                      </Text>
                    </Center>
                  </Padding>
                  <Input
                    onChangeText={text =>
                      this.setState({...this.state, nameOrEmail: text})
                    }
                    placeholder="Username or email"
                    placeholderTextColor={green}
                    disabled={this.state.isFormSubmited}
                    onFocus={() =>
                      this.state.ref.current.scrollToEnd({animated: true})
                    }
                  />
                  <Input
                    errorStyle={{textAlign: 'right'}}
                    secureTextEntry={true}
                    onChangeText={text =>
                      this.setState({...this.state, password: text})
                    }
                    placeholder="Password"
                    placeholderTextColor={green}
                    style={{marginBottom: 0}}
                    disabled={this.state.isFormSubmited}
                    errorMessage={
                      <Text style={[loginStyles.forgetPassword]}>
                        Forgot Password ?
                      </Text>
                    }
                    onFocus={() =>
                      this.state.ref.current.scrollToEnd({animated: true})
                    }
                  />
                  <Button
                    disabled={this.state.isFormSubmited}
                    icon={
                      this.state.isFormSubmited && (
                        <ActivityIndicator size="large" color={green} />
                      )
                    }
                    onPress={this.submitForm}
                    buttonStyle={{
                      backgroundColor: green,
                      width: 200,
                      marginTop: 8,
                    }}
                    titleStyle={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 25,
                    }}
                    title={!this.state.isFormSubmited && 'Login'}
                  />
                  <View
                    style={{
                      position: 'relative',
                      width: '100%',
                      marginTop: 20,
                    }}>
                    <SeparateLine bgColor={grey} height={2} />
                    <Text style={[loginStyles.or]}>OR</Text>
                  </View>
                  <Center>
                    <Row width={'27%'} justify={'space-between'}>
                      <SocialIcon
                        style={{width: 35, height: 35}}
                        type="facebook"
                      />

                      <TouchableOpacity onPress={this.google}>
                        <SocialIcon
                          style={{width: 35, height: 35}}
                          type="google"
                        />
                      </TouchableOpacity>
                    </Row>
                  </Center>
                  <Center style={{marginTop: 5}}>
                    <Row>
                      <Text style={{color: '#000'}}>
                        Don't have an account ?
                      </Text>
                      <Text
                        style={[loginStyles.register]}
                        onPress={() =>
                          this.props.navigation.navigate('Register')
                        }>
                        {' '}
                        REGISTER
                      </Text>
                    </Row>
                  </Center>
                </Column>
              </ScrollView>
            </Padding>
          </Center>
        </Center>
      </SafeAreaView>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addUserToReduxStore: a => dispatch(addUserToReduxStore(a)),
    setUserIsConnected: () => dispatch(setUserIsConnected(true)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

const loginStyles = StyleSheet.create({
  topColoredBar: {
    width: '50%',
    height: 30,
    backgroundColor: green,
    top: -15,
    borderRadius: 10,
  },
  loginAccountText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  greenText: {
    color: green,
  },
  redText: {
    color: red,
  },
  yellowText: {
    color: 'yellow',
  },
  forgetPassword: {
    color: '#000',
    marginBottom: 7,
  },
  or: {
    color: '#fff',
    width: 29,
    height: 29,
    borderRadius: 20,
    top: -15,
    left: '45%',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 3,
    backgroundColor: grey,
  },
  register: {
    color: green,
    fontWeight: 'bold',
  },
});
