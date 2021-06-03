import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';

export default function ImageSwipe({img}) {
  const width = useWindowDimensions().width;
  const height = width * 1.05;

  const [active, setActive] = useState(0);

  const images = [
    'http://4.bp.blogspot.com/-O0vMfUzRIuI/WsZS4JA3C2I/AAAAAAAABCA/SqExYlNbwrMb1KuD5BEX-dM_erX5rD4GACK4BGAYYCw/s1600/logo_rtk_rumah_titian_kasih%2B%25281%2529.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBj1QifYHuA1W96lmeyzb7S5XWJqMbqzlKce9ffSuj5DGSPCWih3pRhUkIuXfhQP0efs&usqp=CAU',
    'https://scontent.fkul13-1.fna.fbcdn.net/v/t1.6435-9/82245767_104187164440837_2535685521179410432_n.png?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HEvWmqT3IogAX_VkYDh&tn=x9jtqJzPpHmllqgO&_nc_ht=scontent.fkul13-1.fna&oh=611ebe7d23f2ae6e979f8ece6de5ab69&oe=60D99793',
    'https://www.nuruliman.cc/images/logo.png',
    'https://pbs.twimg.com/profile_images/581658588965314560/x60cbeJl_400x400.jpg'  
    ]

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={{width, height, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: -15,
      alignSelf: 'center',
    },
    dot: {
      color: '#888',
      fontSize: 50,
    },
    activeDot: {
      color: '#FFF',
      fontSize: 50,
    },
  });