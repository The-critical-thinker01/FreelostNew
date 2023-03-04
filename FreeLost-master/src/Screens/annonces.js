import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {SliderBox} from '../components/sliderBox';
import Column from '../librairies/column';
import Padding from '../librairies/padding';

class Annonces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?pullover',
        'https://source.unsplash.com/1024x768/?banana',
        'https://source.unsplash.com/1024x768/?books',
        'https://source.unsplash.com/1024x768/?garden',
        'https://source.unsplash.com/1024x768/?chair',
        'https://source.unsplash.com/1024x768/?mode',
        'https://source.unsplash.com/1024x768/?hospital',
      ],
      items: [
        {
          name: 'Voiture',
          text: 'Promotion sur vos vehicules',
          image: 'https://source.unsplash.com/1024x768/?car',
        },
        {
          name: 'Christian Dior',
          text: 'Votre marque de luxe est de retour',
          image: 'https://source.unsplash.com/1024x768/?dior',
        },
        {
          name: 'Tourisme',
          text: 'Profitez des plus belles endoits a visiter dans le monde',
          image: 'https://source.unsplash.com/1024x768/?village',
        },
        {
          name: 'Education',
          text: "L'education a la porte de tous !",
          image: 'https://source.unsplash.com/1024x768/?school',
        },
        {
          name: 'Ville',
          text: "L'une des plus belles villes au monde",
          image: 'https://source.unsplash.com/1024x768/?town',
        },
        {
          name: 'Decoration',
          text: 'Profitez de cette reduction sur vos Chaises de bureau et autres',
          image: 'https://source.unsplash.com/1024x768/?table',
        },
        {
          name: 'Chaussures',
          text: 'Les derniers look du moment, pour accompagner votre habillement',
          image: 'https://source.unsplash.com/1024x768/?choes',
        },
        {
          name: 'Cafe',
          text: 'Du pure Cafe fait a base de cacao 100% naturel',
          image: 'https://source.unsplash.com/1024x768/?tea',
        },
        {
          name: 'Travail',
          text: 'Lieu de travail ultra organise',
          image: 'https://source.unsplash.com/1024x768/?work',
        },
        {
          name: 'Livres',
          text: 'Documents et Livres les plus instructifs',
          image: 'https://source.unsplash.com/1024x768/?book',
        },
        {
          name: 'Route',
          text: 'La route la plus pratique du coin !!!',
          image: 'https://source.unsplash.com/1024x768/?road',
        },
      ],
    };
  }

  render() {
    console.log(this.state.items[0].image, 'Raoul');
    return (
      <ScrollView>
        <Column height={'100%'}>
          <View style={{height: 150}}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={204}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={10}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={styles.pagination}
              dotStyle={styles.dot}
              ImageComponentStyle={{borderRadius: 10, width: '99%'}}
              imageLoadingColor="#2196F3"
            />
          </View>
          <Padding pVertical={3}>
            <View
              style={{
                backgroundColor: 'grey',
                paddingLeft: 10,
                paddingVertical: 2,
              }}>
              <Text style={{fontWeight: 'bold'}}>Autres annonces</Text>
            </View>
          </Padding>
          <Padding pVertical={3} pHorizontal={4}>
            {this.state.items.map(ele => (
              <View
                style={[
                  styles.itemContainer,
                  {
                    overflow: 'hidden',
                    // borderWidth: 2,
                    // borderColor: '#000',
                    width: '100%',
                    marginBottom: 7,
                  },
                ]}>
                <Image source={{uri: ele.image}} style={styles.annonceImage} />
                <View style={styles.annonceText}>
                  <Text style={[styles.itemCode, {color: 'yellow'}]}>
                    Sponsorise
                  </Text>
                  <Text style={styles.itemName}>{ele.name}</Text>
                  <Text style={styles.itemCode}>{ele.text}</Text>
                </View>
              </View>
            ))}
          </Padding>
        </Column>
      </ScrollView>
    );
  }
}

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
  gridView: {
    marginTop: 1,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  annonceImage: {
    height: 200,
    width: '100%',
  },
  annonceText: {
    position: 'absolute',
    height: 60,
    backgroundColor: '#0007',
    width: '100%',
  },
});

export default Annonces;
