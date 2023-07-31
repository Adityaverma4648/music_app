import React , {useLayoutEffect} from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LibraryScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            LibraryScreen
        </Text>
     </View>
  )
}

export default LibraryScreen;