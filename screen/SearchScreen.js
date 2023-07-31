import React , {useState , useLayoutEffect} from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            SearchScreen
        </Text>
     </View>
  )
}

export default SearchScreen;