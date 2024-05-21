import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  },
  card: {
    borderWidth: 0.6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
   },
  img: {
    height: 150,
    width: 157,
    borderWidth: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  lableStyle: {
    color: color.white,
    fontSize: 14,
    marginTop: 8,
    marginLeft: 8,
  },
  imageStyle: {
    height: 10,
    top: 9,
    width: 10,
    marginLeft: 5,
  },
  price: {
    color: color.white,
    fontSize: 15,
    marginTop: 5,
    fontWeight: '400',
    marginLeft: 8,
  },

  buttonStyle: {height: 33, width: '90%'},
});
