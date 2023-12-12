import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('blogdetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:30
          }}>
          <View style={{gap: 5, flex:1}}>
            <Text style={styles.cardCategory}>{item.category?.name}</Text>
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
          <Receipt21
            color={colors.grey(0.6)}
            variant="Linear"
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    gap: 10,
    marginHorizontal: 16,
  },
  cardItem: {
    borderColor: '#FF570C',
    width: 300,
    height: 195,
    borderWidth : 5,
    borderRadius: 15,
    marginTop: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
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
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  cardImage: {
    width: '100%',
    width: 150,
    height: 70,
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
});