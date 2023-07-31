
import React , {useLayoutEffect} from 'react'
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LikedScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            LikedScreen
        </Text>
     </View>
  )
}

export default LikedScreen;