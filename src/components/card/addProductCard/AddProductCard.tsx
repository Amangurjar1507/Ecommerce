import React, {FC, memo} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../componentsIndex';
import {styles} from './addProductCard.style';
import color from '../../../theme/color';
const AddProductCard: FC<any> = ({item, isLoading,addCard}) => {
  return (
       <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
        <View >
          <Text style={styles.lableStyle}>{item.name}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Button
            onPress={addCard}
            title="Add Card"
            colors={color.buttTextColor}
            isLoading={isLoading}
            textColor={color.white}
            buttonStyle={[styles.buttonStyle,{
              marginTop: 2,
              opacity:item.Cart ? 10 :20,
                
            }]}
            linearStyle={styles.buttonStyle}
          />
        </View>
     </View>
  );
};

export default memo(AddProductCard);
