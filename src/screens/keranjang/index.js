import {StyleSheet,Text,View,ScrollView,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import {ShoppingCart, Edit} from 'iconsax-react-native';
import React, { useState, useCallback,useEffect} from 'react';
import {fontType, colors} from '../../theme';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {formatNumber} from '../../utils/formatNumber';
import axios from 'axios';
import { ItemSmall } from '../../components';
import firestore from '@react-native-firebase/firestore';

const Keranjang = () => {
 const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('minicar')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('minicar')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={StyleSheet.container}>
      <View style={{flexDirection: 'row'}}>
      <ShoppingCart size="32" color="#000000"/>
        <Text style={styles.text}>Keranjang</Text>
      </View>
      <ScrollView>
      </ScrollView>
      <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData?.map((item, index) => {
            return(
              <ItemSmall item={item} key={index}/>
            )}
             )
          )}
        </View>
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
