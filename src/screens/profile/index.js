import {ScrollView,StyleSheet,Text,View,TouchableOpacity,} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData} from '../../../data';
import {fontType, colors} from '../../theme';
import { Setting2, Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import ActionSheet from 'react-native-actions-sheet';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const Profile = () => {
  const navigation = useNavigation();
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={openActionSheet}>
          <Setting2 color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageBanner}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 10,
            bottom: 5,
          }}>
          <View style={{gap: 15, alignItems: 'center'}}>
            <FastImage
              style={profile.pic}
              source={{
                uri: ProfileData.profilePict,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{gap: 5, alignItems: 'center'}}>
              <Text style={profile.name}>{ProfileData.name}</Text>
              <Text style={profile.info}>
                Member since {ProfileData.createdAt}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.imageBanner2}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            marginVertical: 25,
            marginLeft: 90,
          }}>
          <View style={{alignItems: 'center', gap: 5}}>
            <Text style={profile.sum}>{ProfileData.transaksi}</Text>
            <Text style={profile.tag}>Transaksi</Text>
          </View>
          <View style={{alignItems: 'center', gap: 5}}>
            <Text style={profile.sum}>{ProfileData.saldo}</Text>
            <Text style={profile.tag}>Saldo</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.imageBanner3}>
        <Text style={profile.konten}>Pesanan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageBanner3}>
        <Text style={profile.konten}>Pembayaran</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageBanner3}>
        <Text style={profile.konten}>Pengiriman</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageBanner3}>
        <Text style={profile.konten}>Pengaturan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageBanner3}
      onPress={() => navigation.navigate('AddItem')}>
      <Text style={profile.konten}>Tambah Barang</Text>
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleLogout}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
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
    height: 100,
    borderRadius: 20,
    marginLeft: 50,
    bottom: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  imageBanner3: {
    borderColor: '#FF570C',
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 50,
    top: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    margin: 5,
  },
});
const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15, top: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  sum: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  status: {
    flexDirection: 'row',
    gap: 20,
  },
  konten: {
    textAlign: 'center',
    top: 10,
    fontSize: 15,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
});
