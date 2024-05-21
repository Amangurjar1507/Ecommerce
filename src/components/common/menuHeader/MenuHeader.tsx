import React from 'react';
import {Text, Image, View, TouchableOpacity, Alert} from 'react-native';
import styles from './menuHeader.style';
import {menuHeaderProps} from './menuHeader.interface';
import {useNavigation} from '@react-navigation/native';
import imageIndex from '../../../assets/imageIndex';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import color from '../../../theme/color';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

const MenuHeader: React.FC<menuHeaderProps> = props => {
  const navigation = useNavigation();
  const dataList = useSelector((state: any) => state.ItemList.dataList);

  const sum = dataList.reduce(function (prev: any, current: any) {
    return prev + +current.qty;
  }, 0);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('GetStarted');
      Snackbar.show({
        text: 'You are SignOut  successfully',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: color.green,
        action: {
          text: 'UNDO',
          textColor: color.white,
          onPress: () => {
            // Handle UNDO action if needed
          },
        },
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={[styles.container, props.containerStyle]}>
      <LinearGradient colors={color.buttTextColor} style={styles.linearStyle}>
        <View style={styles.backStyle}>
          <TouchableOpacity onPress={handleSignOut}>
            <Image style={styles.logout} source={imageIndex.logout} />
          </TouchableOpacity>
          <Text style={styles.nameStyle}>Different Kind Food</Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('AddBag')}>
              <Image
                resizeMode="contain"
                style={styles.menuImage}
                source={imageIndex.bag}
                tintColor={'black'}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('AddBag')}
                style={styles.addValue}>
                <Text style={styles.addValueText}>{sum}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MenuHeader;
