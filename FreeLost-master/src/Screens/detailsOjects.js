import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SliderBox} from './../components/sliderBox';
import Center from '../librairies/center';
import Column from '../librairies/column';
import Padding from '../librairies/padding';
import {
  Button,
  Icon,
  Input,
  Card,
  ListItem,
  Avatar,
} from 'react-native-elements';
import {freelost} from '../constantes/constantes';

class Detailsojects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      otherData: {},
    };
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      otherData: this.props.route.params.otherData,
      images: [
        freelost + this.props.route.params.otherData.Photo,
        'https://source.unsplash.com/1024x768/?nature',
        // 'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        // 'https://source.unsplash.com/1024x768/?tree',
      ],
    });
  };

  render() {
    return (
      <Column height={'100%'}>
        <ScrollView>
          <View style={{height: 200}}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={204}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={10}
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={[styles.pagination]}
              dotStyle={styles.dot}
              ImageComponentStyle={{borderRadius: 10, width: '99%'}}
              imageLoadingColor="#2196F3"
            />
          </View>
          <Padding pTop={10}>
            <Center>
              <Text style={[styles.title, {color: '#111'}]}>Informations</Text>
            </Center>
          </Padding>
          <Padding pHorizontal={10}>
            <View>
              {this.state.otherData.Categorie != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Categorie:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Categorie}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.DatePerteObjet != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Date de perte de l'objet:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.DatePerteObjet}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.Description != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Description:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Description}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.Lieu != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Lieu:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Lieu}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.Modele != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Modele:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Modele}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}

              {this.state.otherData.Marque != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Marque:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Marque}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.Nationalite != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Nationalite:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.Nationalite}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.NomDoc != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Nom Du Document:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.NomDoc}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}

              {this.state.otherData.UserNom != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Nom du proprietaire:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.UserNom}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.UserPrenom != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Prenom:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.UserPrenom}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}

              {this.state.otherData.nomObjet != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Nom de l'objet:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.nomObjet}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.statut != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Statut de l'objet:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.statut}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
              {this.state.otherData.valider != '' && (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title style={{fontSize: 17, fontWeight: 'bold'}}>
                      Valide ? :
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {this.state.otherData.valider}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              )}
            </View>
          </Padding>
        </ScrollView>
      </Column>
    );
  }
}

export default Detailsojects;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',
  },
  pagination: {
    position: 'absolute',
    //   bottom: 0,
    top: 190,
    height: 30,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
