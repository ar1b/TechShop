import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    root: {
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderColor: '#D1D1D1',
      backgroundColor: '#FFF',
      marginVertical: 5
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
    }
}) 

export default styles