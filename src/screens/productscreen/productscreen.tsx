import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from '../productscreen/styles'; 
import product from '../../data/product';
import QuantitySelector from '../../components/quantity-selector/quantityselector';
import Button from '../../components/button/button';
import { Picker } from '@react-native-picker/picker';
import ImageCarousel from '../../components/image-carousel/imagecarousel';

const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1)

  return (
    <View style={styles.root} >
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        { product.options.map( option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
 
      <Button
        text={'Add to Cart'} 
        onPress={() => {console.warn('add')}} 
        containerStyles={{backgroundColor: '#E3C905'}}
      />
      <Button 
        text={'Buy Now'}  
        onPress={() => {console.warn('Buy Now')}} 
      />
    </View>
  )
}

export default ProductScreen;