import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import style from './useAddBag.style';
import BagCard from '../../../components/card/CardBag/bagCard';
import { Header } from '../../../components/componentsIndex';
import useAddBag from './useAddBag';
import * as Animatable from 'react-native-animatable';

const AddItem = () => {
  const { filllter, sum } = useAddBag();

  const renderItem = ({ item, index }) => (
    <Animatable.View
      animation="slideInRight"
      duration={800}
      delay={index * 200}
      useNativeDriver
    >
      <BagCard
        hideCount
        hideBin
        item={item}
        index={index}
        onClick={() => {}}
        onAdd={() => {}}
        onMinas={() => {}}
        onRemove={() => {}}
      />
    </Animatable.View>
  );

  return (
    <View style={style.container}>
      <Header lable={'My Cart'} backIconsShown />
      <ScrollView
        style={style.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={filllter}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.flatlistStyle}
          ListEmptyComponent={() => (
            <Animatable.Text
              animation="fadeIn"
              duration={800}
              style={style.productListEmptyStyle}
            >
              No Data Available
            </Animatable.Text>
          )}
        />
      </ScrollView>
      {filllter.length > 0 && (
 
        <Animatable.View
          animation="slideInUp"
          duration={800}
          delay={800}
          useNativeDriver
          style={style.totalItemCard}
        >
          <Text style={style.totalItem}>Items Total</Text>
          <View style={style.rowItem}>
            <Text style={style.press}>SubTotal</Text>
            <Text style={style.press}>PR:- {sum}</Text>
          </View>
          <View style={style.rowItem}>
            <Text style={style.press}>Delivery Charge</Text>
            <Text style={style.press}>PR:- 20</Text>
          </View>
          <View style={[style.rowItem, style.addBorder]}>
            <Text style={style.press}>Discount</Text>
            <Text style={style.press}>PR:- 10</Text>
          </View>
          <View style={[style.rowItem, { marginTop: 13 }]}>
            <Text style={[style.press, style.orderText]}>Order Total</Text>
            <Text style={[style.press, style.fontSizeStyle]}>
              PR = {sum + 20 - 10}
            </Text>
          </View>
        </Animatable.View>
       )}
    </View>
  );
};

export default AddItem;
