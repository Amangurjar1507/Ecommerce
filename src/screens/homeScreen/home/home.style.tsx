import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  viewText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: color.butt,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  seviesText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: color.black,
  },
  recentView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginTop: 3,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  fiterView: {
    borderWidth: 0.8,
    borderRadius: 5,
    paddingVertical: 2.8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 13,
  },
  filterText: {
    color: color.black,
    fontSize: 14,
    right: 11,
  },
  shoImage: {
    height: 17,
    width: 17,
    left: 9,
  },
  categoryView: {
    marginTop: 13,
  },
  cardView: {
    justifyContent: 'center',
    flexBasis: 'auto',
  },
  banerImg: {
    height: 80,
    width: 100,
  },
  row: {
    marginHorizontal: 17,
  },
  mainCard: {
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center',
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: color.label,
    marginHorizontal: 5,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainRow: {},
  textRow: {
    flexDirection: 'row',
  },
  categoryText: {
    color: color.white,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowView: {marginHorizontal: 18},
  contentContainerStyle: {
    paddingBottom: 20,
  },
});

export default styles;
