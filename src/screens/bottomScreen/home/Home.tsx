import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {CustomStatusbar} from '../../../components/componentsIndex';
import styles from './home.style';
import color from '../../../theme/color';
import {ServicesData} from './constData';
import useHome from './useHome';
import AddProductCard from '../../../components/card/addProductCard/AddProductCard';
import MenuHeader from '../../../components/common/menuHeader/MenuHeader';
import * as Animatable from 'react-native-animatable';

const Home = () => {
  const {handlePageChange, loading} = useHome();

  const animation = 'slideInRight'; // You can use other animations like 'slideInLeft', 'slideInUp', 'slideInDown'

  const renderItem = ({item, index}) => (
    <Animatable.View
      animation={animation}
      duration={1000} // Increased duration for slower animation
      delay={index * 200} // Increased delay for each item
      useNativeDriver={true} // Enable native driver for better performance
    >
      <AddProductCard
        item={item}
        isLoading={loading}
        addCard={() => handlePageChange(item, index)}
      />
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <CustomStatusbar
        // backgroundColor={color.transparent}
        barStyle="light-content"
      />
      <MenuHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 1}}>
        <View style={styles.rowView}>
          <Text style={styles.categoryText}>Food Category</Text>
          <FlatList
            data={ServicesData}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
          <FlatList
            data={ServicesData}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
          <FlatList
            data={ServicesData}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
