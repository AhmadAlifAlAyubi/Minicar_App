import React, {useState,useRef} from 'react';
import {  ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, StatusBar, FlatList, Animated, TouchableWithoutFeedback} from 'react-native';
import {SearchNormal1, ShoppingCart, } from 'iconsax-react-native';
import {BlogList, CardList, CategoryList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall, ItemBeranda } from '../../components';
import { useNavigation } from "@react-navigation/native";
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Home() {
  const navigation = useNavigation();
  const [choose, setChoose] = useState(1);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  return (
    <Animated.ScrollView>
      <Animated.View style={styles.container}>
        <View style={styles.imageBanner}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Image
                style={{width: 250, height: 250, marginTop: 120, left: 50}}
                source={require('../../../src/assets/image/Logo2.png')}
              />
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity>
                <ShoppingCart size="32" color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{...category.logo, marginLeft: 30}}>
            <View>
              <View style={styles.imageBanner2}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  Ahmad Alif
                </Text>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 10,
                    fontSize: 25,
                  }}>
                  Saldo : Rp. 50.000
                </Text>
                <Image
                  style={{width: 35, height: 35, left: 70, top: 10}}
                  source={require('../../../src/assets/image/Wallet-add.png')}
                />
                <Image
                  style={{width: 35, height: 35, left: 115, bottom: 24}}
                  source={require('../../../src/assets/image/Clock.png')}
                />
                <Image
                  style={{width: 35, height: 35, left: 160, bottom: 60}}
                  source={require('../../../src/assets/image/More.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
          <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.white(0.5)} variant="Linear" />
          <Text style = {itemVertical.placeholder}>Search</Text>
        </View>
        </TouchableWithoutFeedback>
        <ListBlog/>
      </Animated.View>
    </Animated.ScrollView>
  );
}
// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardImage: {
    width: 20,
  },
  profileContainer: {
    marginLeft: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    paddingHorizontal: 24,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderRadius: 20,
    marginRight: 140,
    marginBottom: 9,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    marginBottom: 1,
  },

  kategori: {
    marginHorizontal: 4,
    color: 'black',
    fontSize: 10,
  },

  imageBanner: {
    backgroundColor: '#606470',
    width: 'auto',
    height: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  imageBanner2: {
    backgroundColor: '#FF570C',
    width: 300,
    height: 150,
    borderRadius: 20,
    marginTop: 50,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  listCategory: {
    paddingVertical: 20,
    paddingTop: 15,
  },
  listBlog: {
    paddingTop: 50,
    gap: 10,
  },
  bar: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.darkModeBlack(0.5),
    borderRadius: 10,
    marginTop : 75,
    marginBottom : 1,
    flex: 1,
  },
});
// Style Header
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#FF570C',
    marginHorizontal: 10,
    marginTop: 20,
    width: 90,
    height: 35,
  },

  item2: {
    paddingHorizontal: 14,
    marginHorizontal: 10,
  },

  logo: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    marginLeft: 3,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 12,
    color: colors.black(),
  },

  title2: {
    marginLeft: 3,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 30,
    color: colors.black(),
  },

  Title1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCat1: {
    backgroundColor: '#FF8A65',
    paddingBottom: 100,
    paddingRight: 25,
    paddingLeft: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

const Status = () => {
  return <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'}></StatusBar>;
};

const ListBlog = () => {
  // const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(0,5);
  return (
    <Animated.ScrollView>
      <View style={styles.listBlog}>
        {/* <ListHorizontal data={horizontalData} /> */}
        <View style={itemVertical.listCard}>
          {CardList.map((item, index) => (
            <ItemBeranda item={item} key={index} />
          ))}
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 50,
    paddingVertical: 1,
    gap: 1,
    marginHorizontal: 16,
    marginVertical : 1,
    marginTop: 1
  },
  cardItem: {
    borderWidth: 5,
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
    fontSize: 25,
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
    width: '50%',
    width: 100,
    height: 55,
    borderRadius: 10,
    resizeMode: 'cover',
    marginLeft: 55,
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
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(0.5),
    lineHeight: 18,
  },
});
// STYLE HALAMAN HORIZONTAL
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 65,
    height: 65,
    backgroundColor: '#90A4AE',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingLeft: 16,
    gap: 50,
    top: 25,
    bottom: 10,
  },
  cardImage: {
    width: '50%',
    top: 5,
    right: 6,
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    paddingLeft: 35,
    paddingBottom: 70,
  },
  Title: {
    fontSize: 16,
    color: colors.white(),
    borderRadius: 25,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    textAlign: 'center',
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});