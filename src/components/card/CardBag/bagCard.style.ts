  import {StyleSheet} from 'react-native';
  import color from '../../../theme/color';

  const style = StyleSheet.create({
    card: {
      height: 180,
      width: '100%',
      backgroundColor: color.background,
      padding: 10,
      margin: 7,
      flexDirection: 'row',
      borderRadius: 10,
    },
    rowViewText: {
      flexDirection: 'row',
      height: 35,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    press: {
      fontSize: 18,
      lineHeight: 25,
    },
    mediumText: {
      fontSize: 16,
      lineHeight: 28,
      color: color.white,
      fontWeight: '500',
    },
    addBotton: {
      height: 40,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '50%',
    },
    addImage: {
      height: 28,
      width: 28,
    },
    addValue: {
      fontSize: 19,
      lineHeight: 23,
      color: color.white,
    },
    itemCard: {
      height: 152,
      width: 160,
      borderRadius: 20,
    },
    binImage: {
      height: 28,
      width: 28,
      borderRadius: 10,
    },
    leftViewStyle: {
      marginLeft: 10,
      flexDirection: 'column',
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    deleteView: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 15,
    },
    mainRow:{
      width: 165,
     justifyContent: 'space-between',
   }
  });
  export default style;
