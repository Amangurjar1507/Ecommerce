import React, {memo} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../headerStyle';
import auth from '@react-native-firebase/auth';

 const Header: React.FC<PropType> = props => {
  const navigation = useNavigation ();

   const goBack = (): void => {
    navigation.goBack();
  };
  
  return (
    <View style={{ flexDirection: 'row',
      backgroundColor:"black",
      height:55,
      justifyContent:"center",
      alignItems:"center"
    }}>
      {props.backIcon && (
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={style.backView}>
            <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/000/589/878/original/vector-back-icon.jpg"}}
            style={{height:22,width:22}}
            
            />
         </TouchableOpacity>
      )}
 
      <Text style={[style.title, props.titleStyle]}>{props.title}</Text>
      
      
    </View>
  );
};

export default memo(Header);