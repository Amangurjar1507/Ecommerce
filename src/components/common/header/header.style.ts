import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  rightButtonText: {
    paddingHorizontal: 5,
    height: 25,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  lableView: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableStyle: {
    fontSize: 18,
    color: color.black,
    lineHeight: 20,
    fontWeight:"bold"
   },

  headingStyle: {
    marginTop: 15,
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32.84,
    color: color.primaryText,
  },
  headingDesStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    color: color.primaryText,
  },
  back:{height: 18, width: 18}
});
