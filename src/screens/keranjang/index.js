import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity} from 'react-native';
import {ShoppingCart} from 'iconsax-react-native';
import React from 'react';
import {fontType, colors} from '../../theme';

const Keranjang = () => {
  return (
    <View style={StyleSheet.container}>
      <View style={{flexDirection: 'row'}}>
      <ShoppingCart size="32" color="#000000"/>
        <Text style={styles.text}>Keranjang</Text>
      </View>
      <ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require('../../../src/assets/image/Chevy.png')}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={itemVertical.cardTitle}>
                      Hotwheels 1970 Chevy® Nova™
                    </Text>
                    <Text style={itemVertical.cardTitle2}>Rp 120.000</Text>
                  </View>
                  <TouchableOpacity style={itemVertical.imageBanner}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: colors.black(),
                      }}>
                      Pilih
                    </Text>
                  </TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={require('../../../src/assets/image/Trash.png')}></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require('../../../src/assets/image/Nissan.png')}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '100%'}}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={itemVertical.cardTitle}>
                    MINI GT NISSAN LB-SILHOUETTE WORKS GT 35GT-RR
                    </Text>
                    <Text style={itemVertical.cardTitle2}>Rp 320.000</Text>
                  </View>
                  <TouchableOpacity style={itemVertical.imageBanner}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: colors.black(),
                      }}>
                      Pilih
                    </Text>
                  </TouchableOpacity>
                <Image
                    style={styles.icon}
                    source={require('../../../src/assets/image/Trash.png')}>
                </Image>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    <TouchableOpacity style={itemVertical.imageBanner2}>
    <Text style = {{
        textAlign : 'center',
        fontSize : 25,
        color: colors.black(),
        }}
        >Beli</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Keranjang;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  text: {
    fontSize: 25,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 1,
  },
  icon: {
    width: '10%',
    flexDirection: 'row',
  },
});

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    gap: 10,
    marginHorizontal: 16,
  },
  cardItem: {
    borderWidth: 5,
    borderColor: '#FF570C',
    flexDirection: 'column',
    borderRadius: 10,
  },
  cardItem2: {
    borderWidth: 2,
    borderColor: '#FF570C',
    flexDirection: 'column',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    textAlign: 'justify',
  },
  Title: {
    textAlign: 'justify',
    color: colors.black(),
  },
  TitleNews: {
    color: colors.black(),
    fontsize: 30,
    marginTop: 30,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  cardTitle2: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    marginTop: 5,
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  cardImage: {
    width: '30%',
    width: 100,
    height: 55,
    borderRadius: 10,
    resizeMode: 'cover',
    marginLeft: 75,
  },
  cardInfo: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    width: 'auto',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    paddingVertical: 10,
  },
  imageBanner: {
    backgroundColor: '#ED7D31',
    width: 50,
    height: 25,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 185,
    top: 40,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  imageBanner2: {
    borderWidth: 1,
    borderColor: '#FF570C',
    width: 200,
    height: 40,
    marginLeft : 100,
    borderWidth : 2,
    borderRadius: 15,
    marginTop: 200,
    fontFamily: fontType['Pjs-ExtraBold'],
  }
});
