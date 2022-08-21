import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useCallback, useState } from 'react'

const ImageCarousel = ({images}: {images: [string]}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const windowWith = useWindowDimensions().width

  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0)
    }
  }, []);

  return (
    <View style={styles.root}>
        <FlatList
            data={images}
            renderItem={({item}) => (
                <Image 
                    style={[styles.image, {width: windowWith - 40}]} 
                    source={{uri: item}} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWith-20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50
            }}
            onViewableItemsChanged={onFlatListUpdate}
        />

        <View style={styles.dots}>
            {images.map((image, index) => (
                <View style={[styles.dot,
                    {
                        backgroundColor: index == activeIndex ? '#C9C9C9' : '#EDEDED'
                    }
                ]}
                />
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#EDEDED',
        borderColor: '#C9C9C9'
    }
})
export default ImageCarousel;