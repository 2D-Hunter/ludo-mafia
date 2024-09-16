import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, {useState} from 'react';
import SplashImg from "./../assets/images/Splash.png";
import SplashIcon from "./../assets/images/SplashIcon.png";
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function SplashScreen() {

    const navigation = useNavigation();
    React.useEffect(() => {
        setTimeout(() => {
             navigation.navigate('SignupScreen');
        }, 3000);
    }, [])

  return (
        <View style={styles.container}>
            <Image source={SplashIcon} style={styles.splashIcon}/>
            <Image source={SplashImg} style={styles.splashImg}/>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
          flex:1,
          
        backgroundColor: '#FDE800',
         justifyContent:'center',
        alignItems:'center'
        
    },
    splashImg:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
         marginBottom:-deviceHeight/2.1
        
    },
    splashIcon:{
        width:'50%',
        height:'50%',
        resizeMode:'contain',
        justifyContent:'center',
        alignContent:'center',
        marginBottom:-deviceHeight/2.5
    }
})