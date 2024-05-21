import {Platform, StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: color.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: color.white,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    paddingBottom: 5,
   },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.red,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: color.white,
  },
  errorMsg: {
    color: color.red,
    fontSize: 14,
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    marginTop: 15,
    width:"50%",
    alignSelf:"flex-end"
  },
  sign:{
    fontSize: 18,
    marginTop: 15,
    alignSelf: 'flex-end',
    color: color.white,
    textDecorationLine:"underline"

  }
});

export default styles;
