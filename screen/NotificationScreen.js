import React , {useLayoutEffect} from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NotificationScreen = () => {

   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
     <View>
        <Text>
            NotificationScreen
        </Text>
     </View>
  )
}

export default NotificationScreen;