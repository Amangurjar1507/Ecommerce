import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: color.backGray,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    color: color.white,
    flex: 1,
  },
  hideView: {
    marginLeft: 10,
    alignItems: 'flex-end', // Align button to end horizontally
    justifyContent: 'center',
  },
  eyes: {height: 20, width: 22},
});
export default styles;
