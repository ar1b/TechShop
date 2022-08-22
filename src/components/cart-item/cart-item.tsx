import { View, Text, Image} from 'react-native'
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../quantity-selector/quantityselector';
import styles from './styles';


interface CartItemProps {
  cartitem: {
    id: string,
    quantity: string,
    option?: string,
    item: {
      id: string,
      title: string,
      image: string,
      avgRating: string,
      ratings: number,
      price: number,
      oldPrice?: number
    }
  }
}

const CartItem = ({cartitem}: CartItemProps) => {

  const {quantity: quantityProp, item} = cartitem
  const [ quantity, setQuantity] = useState(quantityProp)
  return (
    <View>
        <View style={styles.root}>
          <View style={styles.row}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.ratingsContainer}>
                  {[0,0,0,0,0].map((el, i) =>
                      <FontAwesome
                        key={`${item.id}-${i}`}
                        style={styles.star} 
                        name={ i < Math.floor(Number(item.avgRating)) ? 'star' : 'star-o'}
                        size={18} 
                        color={'#E47911'}/>
                    )
                  }          
                  <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>
                  {item.price}
                  {item.oldPrice && (
                    <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                  )}
                </Text>
              </View>
          </View>
          <View style={styles.quantityContainer}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </View>    
        </View>
    </View>
  )
}

export default CartItem 