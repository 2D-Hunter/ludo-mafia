import {StyleSheet ,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native'
import { Stack } from 'expo-router';




const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Page = () => {
    return (
        

        
        <View style={styles.container}>
            <Stack.Screen options={{headerShown:false}}/>
            <ImageBackground source={require("./../assets/images/Untitled-2.png")} style={styles.backgroundImage}>
                
                <View style={{flex:1, marginTop:60, flexDirection:'row', marginLeft:-deviceWidth/1.4}}>
                    <Text style={{color:'#fff', fontSize:25, opacity:0.5}}>ZUPEE</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#171270', width:deviceWidth/2.1, height:30, borderRadius:99, marginBottom:10}}>
                        <Text style={{fontSize:12, color:'#fff'}}>2,68,135 playing</Text>
                    </View>
                    
                    <Text style={{fontSize:38, color:'#fff'}}>Ludo Supreme</Text>
                    <Text style={{fontSize:18, color:'#fff', opacity:0.4, marginBottom:20, marginTop:-2}}>Ludo in under 10 minutes</Text>
                    <TouchableOpacity style={styles.btnPlay}>
                        <Text style={{fontSize:15, fontFamily:'Outfit-Bold'}}> Play Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage:{
        width:'100%',
        height:deviceHeight/1.75,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    btnPlay: {
        backgroundColor:'#FEE800',
        borderRadius:99,
        padding:15,
        width:deviceWidth/1.8,
        alignItems:'center',
        marginBottom:50
    }
})