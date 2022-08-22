import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    root: {
      borderWidth: 1,
      borderColor: '#D1D1D1',
      borderRadius: 10,
      backgroundColor: '#FFF',
      marginVertical: 5,
      padding: 5
    },
    row: {
      flexDirection: 'row',
    },
    image: {
        width: 150,
        height: 150,
        flex: 2,
        resizeMode: 'contain'
    },
    
    rightContainer: {
      padding: 10,
      flex: 3
    },
 
    title: {
      fontSize: 18
    },

    price: {
      fontSize: 18,
      fontWeight: 'bold'
    },

    oldPrice: {
      fontSize: 12,
      fontWeight: 'normal',
      textDecorationLine: 'line-through' 
    },

    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5
    },

    star: {
      margin: 2,
    },
    quantityContainer: {
      marginVertical: 10,
      marginLeft: 5
    }
}) 

export default styles