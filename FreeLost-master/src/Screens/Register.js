import axios from 'axios';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import {connect} from 'react-redux';
import {green, grey} from '../constantes/constantes';
import Center from '../librairies/center';
import Column from '../librairies/column';
import Padding from '../librairies/padding';
import Row from '../librairies/row';
import SeparateLine from '../librairies/saparatedLine';
import {addUserToReduxStore} from '../redux/userSlice';
import {freelost} from '../constantes/constantes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserIsConnected } from '../redux/connectionSlice';

class Register extends Component {
  state = {
    isFormSubmited: false,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorSubmitedForm: '',
    phoneNumber: '',
    number: '',
    ref: null,
    secureTextEntry: true,
    firstOpen: true,
  };

  constructor(props) {
    super(props);
    this.state.ref = React.createRef();
  }

  submitForm = async () => {
    // text username
    if (this.state.fullName === '') {
      alert('⚠️ Error : The FullName field is Empty 🧐 !!!');
      return;
    }
    if (this.state.email === '') {
      alert('⚠️ Error : The Email field is Empty 🧐 !!!');
      return;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      alert('⚠️ Error : Please enter a valid email 🧐 !!!');
      return;
    }
    if (this.state.password === '') {
      alert('⚠️ Error : The Password field is Empty 🧐 !!!');
      return;
    }
    if (this.state.confirmPassword === '') {
      alert('⚠️ Error : The confirm Password field is Empty 🧐 !!!');
      return;
    } else if (this.state.confirmPassword !== this.state.password) {
      alert(
        '⚠️ Error : The confirm Password should be same with password 🧐 !!!',
      );
      return;
    }
    this.setState({isFormSubmited: true});
    await axios
      .post(freelost + '/users/new', {
        username: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        numero: this.state.phoneNumber,
      })
      .then(async rps => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(rps.data));
          await AsyncStorage.setItem('newOnApp', JSON.stringify(true));
        } catch (e) {
          console.log(e);
        }
        this.props.addUserToReduxStore(rps.data);
        this.props.setUserIsConnected();
      })
      .catch(err => {
        console.log(err.message);
      });

    this.setState({isFormSubmited: false});
  };

  render = () => {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={green} />
        <Center height={'100%'} style={{backgroundColor: green}}>
          <Center
            height={'90%'}
            bdRadius={20}
            style={{backgroundColor: 'white', overflow: 'hidden'}}>
            <Padding pHorizontal={10} height={'100%'}>
              <ScrollView ref={this.state.ref}>
                <Column>
                  <Padding pVertical={2}>
                    <Center>
                      <Text style={[loginStyles.createAccount]}>
                        Create Account
                      </Text>
                      <Text style={[loginStyles.newAccount]}>
                        Create a new account
                      </Text>
                    </Center>
                  </Padding>
                  <View
                    style={{
                      width: '100%',
                      marginTop: 10,
                    }}>
                    <SeparateLine width={'100%'} bgColor={grey} height={1.5} />
                  </View>
                  <Input
                    onChangeText={text =>
                      this.setState({...this.state, fullName: text})
                    }
                    leftIcon={<Icon name="home" size={25} color={green} />}
                    leftIconContainerStyle={{
                      borderRightWidth: 0.9,
                      borderColor: grey,
                    }}
                    inputContainerStyle={{marginTop: 40}}
                    placeholder="User Name"
                    placeholderTextColor={green}
                    disabled={this.state.isFormSubmited}
                  />
                  <Input
                    dataDetectorTypes={'address'}
                    onChangeText={text =>
                      this.setState({...this.state, email: text})
                    }
                    leftIcon={<Icon name="email" size={22} color={green} />}
                    leftIconContainerStyle={{
                      borderRightWidth: 0.9,
                      borderColor: grey,
                    }}
                    placeholder="Email Adress"
                    placeholderTextColor={green}
                    disabled={this.state.isFormSubmited}
                    onFocus={() =>
                      this.state.ref.current.scrollToEnd({animated: true})
                    }
                  />
                  <PhoneInput
                    defaultCode="CM"
                    layout="first"
                    value={this.state.phoneNumber}
                    onChangeText={number => {
                      this.setState({...this.state, number: number});
                    }}
                    onChangeFormattedText={phoneNumber => {
                      this.setState({...this.state, phoneNumber: phoneNumber});
                    }}
                    codeTextStyle={{color: green}}
                    textContainerStyle={{backgroundColor: 'transparent'}}
                    textInputStyle={{color: green, height: 50}}
                    placeholder={'Phone Number'}
                    containerStyle={{
                      padding: 0,
                      elevation: 0,
                      borderBottomColor: '#0009',
                      borderBottomWidth: 1,
                      height: 50,
                      width: '96%',
                      paddingTop: 0,
                      backgroundColor: 'transparent',
                    }}
                    onFocus={() =>
                      this.state.ref.current.scrollToEnd({animated: true})
                    }
                  />
                  <Input
                    secureTextEntry={this.state.secureTextEntry}
                    onChangeText={text =>
                      this.setState({...this.state, password: text})
                    }
                    leftIcon={<Icon name="vpn-key" size={22} color={green} />}
                    rightIcon={
                      <Icon
                        name="remove-red-eye"
                        size={22}
                        color={green}
                        onPress={() =>
                          this.setState({
                            ...this.state,
                            secureTextEntry: !this.state.secureTextEntry,
                          })
                        }
                      />
                    }
                    leftIconContainerStyle={{
                      borderRightWidth: 0.9,
                      borderColor: grey,
                    }}
                    containerStyle={{marginTop: 20}}
                    placeholder="Create Password"
                    placeholderTextColor={green}
                    disabled={this.state.isFormSubmited}
                    onFocus={() =>
                      this.state.ref.current.scrollToEnd({animated: true})
                    }
                  />
                  <Input
                    secureTextEntry={this.state.secureTextEntry}
                    onChangeText={text =>
                      this.setState({...this.state, confirmPassword: text})
                    }
                    leftIcon={<Icon name="vpn-key" size={22} color={green} />}
                    leftIconContainerStyle={{
                      borderRightWidth: 0.9,
                      borderColor: grey,
                    }}
                    rightIcon={
                      <Icon
                        name="remove-red-eye"
                        size={22}
                        color={green}
                        onPress={() =>
                          this.setState({
                            ...this.state,
                            secureTextEntry: !this.state.secureTextEntry,
                          })
                        }
                      />
                    }
                    placeholder="Confirm Password"
                    placeholderTextColor={green}
                    disabled={this.state.isFormSubmited}
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
                    title={!this.state.isFormSubmited && 'Sign Up'}
                  />
                  <Center style={{marginTop: 20}}>
                    <Row>
                      <Text style={{color: '#000'}}>
                        Already have an account ?
                      </Text>
                      <Text
                        style={[loginStyles.register]}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        {' '}
                        Sign In
                      </Text>
                    </Row>
                  </Center>
                </Column>
              </ScrollView>
            </Padding>
          </Center>
        </Center>
      </>
    );
  };
}
const loginStyles = StyleSheet.create({
  createAccount: {
    fontSize: 35,
    color: green,
    fontWeight: 'bold',
  },
  newAccount: {
    fontSize: 15,
    color: '#000',
  },
  register: {
    color: green,
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    addUserToReduxStore: a => dispatch(addUserToReduxStore(a)),
    setUserIsConnected: () => dispatch(setUserIsConnected(true)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
