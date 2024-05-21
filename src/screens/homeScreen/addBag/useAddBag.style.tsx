import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
   },
  scrollContainer: {
    flex: 1,
    backgroundColor: color.white,
    width: '100%',
  },
  card: {
    height: 180,
    width: '96%',
    backgroundColor: color.white,
    padding: 10,
    margin: 7,
    flexDirection: 'row',
  },
  press: {
    fontSize: 15,
    lineHeight: 25,
    color: color.white,
  },
  addBotton: {
    height: 40,
    width: 150,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  addImage: {
    height: 28,
    width: 28,
  },
  addValue: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
  likeImage: {
    height: 50,
    width: 50,
    position: 'absolute',
    marginLeft: 120,
    marginTop: 10,
  },
  itemCard: {
    height: 160,
    width: 163,
  },
  totalItemCard: {
    height: 200,
    width: '90%',
    backgroundColor: color.background,
    marginHorizontal: 20,
      shadowColor: color.backGray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginBottom: 10,
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    padding: 18,
   },
  totalItem: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    color: color.white,
    marginBottom: 8,
  },
  rowItem: {
    height: 30,
    width: 314,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addBorder: {
    borderBottomWidth: 0.9,
    borderColor: color.white,
  },
  fontSizeStyle: {
    fontSize: 18,
    color: color.lightYellow,
    fontWeight: 'bold',
  },
  orderText: {
    fontSize: 18,
  },
  bottonStyle: {
    marginHorizontal: 40,
    height: 55,
    marginVertical: 20,
    width: '85%',
  },
  productListEmptyStyle: {
    fontSize: 14,
    color: color.textGray,
    textAlign: 'center',
  },
  flatlistStyle: {
    marginHorizontal: 10,
    flexGrow: 1,
    marginTop: 15,
  },
});
export default style;
