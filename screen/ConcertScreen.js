import React ,{useLayoutEffect} from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ConcertScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            ConcertScreen
        </Text>
     </View>
  )
}

export default ConcertScreen;