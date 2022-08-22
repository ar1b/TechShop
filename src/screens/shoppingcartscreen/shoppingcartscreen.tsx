import { View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import CartItem from '../../components/cart-item/cart-item';
import Button from '../../components/button/button';
import products from '../../data/cart';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {

    const navigation = useNavigation()

    const onCheckout = () => {
        navigation.navigate('addy-screen')
    }
    const totalPrice = products.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0)

    return (
      <View style={styles.page}>  
        <FlatList
            data={products}
            renderItem = {({item}) =>(
                <CartItem cartitem={item}/>
            )}
            ListHeaderComponent = {() => (
                <View>
                    <Text style={{fontSize: 18}}>
                        Subtoal ({products.length} items):
                        <Text style={{color: '#E47911'}}>
                            ${totalPrice.toFixed(2)}
                        </Text> 
                    </Text>
                    <Button
                        text='Proceed to Checkout'
                        onPress={onCheckout}
                        containerStyles={{backgroundColor: '#F7E300', borderColor: '#C7B702'}}
                    />
                </View>
            )}
            
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      page: {
        padding: 10
      },
  })

export default ShoppingCartScreen