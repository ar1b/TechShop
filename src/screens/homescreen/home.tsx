import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import ProductComponent from '../../components/product-item/product-component'
import products from '../../data/products'


const HomeScreen = ({searchValue}: {searchValue: string} ) => {
  return (
    <View style={styles.page}>
        {/*Rendering the Product Component*/}
        <FlatList
          data={products}
          renderItem = {({item}) => <ProductComponent item={item} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
    },

    
})

export default HomeScreen