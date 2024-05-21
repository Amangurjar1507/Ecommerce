import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  linearStyle: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',

  },
  backStyle: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logout: {
    height: 27,
    width: 25,
    marginLeft: 12,
   },
  menuImage: {
    height: 30,
    width: 30,
    marginTop: 20,
  },
  nameStyle: {
    fontSize: 20,
    color: color.white,
     fontWeight: '500',
  },
  addValue: {
    height: 25,
    width: 25,
    backgroundColor: color.white,
    borderRadius: 15,
    position: 'relative',
    right: -2,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addValueText: {
    color: color.black,
    fontSize: 15,
    fontWeight: '500',
   },
});

export default styles;
