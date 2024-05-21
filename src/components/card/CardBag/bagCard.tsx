import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import imageIndex from '../../../assets/imageIndex';
import style from './bagCard.style';
import {CardBagProps} from './bagCard.interface';
import {ListAction} from '../../../services/redux/Actions/Action';
import {useDispatch, useSelector} from 'react-redux';

const BagCard: FC<CardBagProps> = ({
  item,
  hideBin,
  hideCount,
  onClick,
  onAdd,
  onMinas,
  onRemove,
  index,
}) => {
  const dispatch = useDispatch();
  const data: any = useSelector(state => state.ItemList.dataList);

  const removeCard = () => {
    const newData = [...data];
    const indexFinal = newData.findIndex(itemArray => itemArray.id === item.id);
    newData[indexFinal].Cart = !newData[indexFinal].Cart;
    newData[indexFinal].qty = 0;
    dispatch(ListAction(newData));
  };
  const handlePostClick = () => {
    const newData = [...data];
    const indexFinal = newData.findIndex(itemArray => itemArray.id === item.id);
    if (newData[indexFinal].qty == 1) {
      newData[indexFinal].qty = newData[indexFinal].qty;
    } else {
      newData[indexFinal].qty = newData[indexFinal].qty - 1;
    }
    dispatch(ListAction(newData));
  };
  const ActionAdd = (index: number, item) => {
    const newData = [...data];
    newData[index].qty = newData[index].qty + 1;
    dispatch(ListAction(newData));
  };

  return (
    <View style={style.card}>
      <Image
        style={style.itemCard}
        source={{uri: item?.image}}
        resizeMode="cover"
      />
      <View style={style.leftViewStyle}>
        <View style={style.rowViewText}>
          <Text style={style.press}>{item?.title}</Text>
          {hideBin && (
            <TouchableOpacity
              style={style.deleteView}
              onPress={() => removeCard()}>
              <Image
                style={style.binImage}
                source={imageIndex.delete}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={style.mainRow}>
          <Text style={style.mediumText}>{item?.name}</Text>
          <Text style={[style.mediumText, {fontSize: 16}]}>
            ₹ : {item?.price}
          </Text>
        </View>

        {hideCount && (
          <View style={style.addBotton}>
            <TouchableOpacity onPress={() => ActionAdd(index, item)}>
              <Image style={style.addImage} source={imageIndex.add} />
            </TouchableOpacity>
            <Text style={style.addValue}>{item?.qty}</Text>
            <TouchableOpacity onPress={() => handlePostClick()}>
              <Image style={style.addImage} source={imageIndex.minus} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default BagCard;
