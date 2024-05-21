import React, {FC} from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
 import {Button, CustomStatusbar} from '../../../components/componentsIndex';
import styles from './getStarted.style';
import color from '../../../theme/color';
import useGetStarted from './useGetStarted';

const GetStarted: FC = () => {
  const {onClickLogin} = useGetStarted();
  return (
    <View style={styles.container}>
      <CustomStatusbar backgroundColor={color.customStatusbar} />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={{uri:"https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"}}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <Button
            onPress={onClickLogin}
            title="Get Started"
            colors={color.buttTextColor}
            textColor={color.white}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default GetStarted;
