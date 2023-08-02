
import React , {useLayoutEffect} from 'react'
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const RecentScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            RecentScreen
        </Text>
     </View>
  )
}

export default RecentScreen;