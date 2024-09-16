import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import OtpTextInput from 'react-native-text-input-otp';
import { OtpInput } from 'react-native-otp-entry';
import { StatusBar } from 'expo-status-bar';

import { Stack } from 'expo-router/stack';
import { useNavigation } from '@react-navigation/native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
var isButtonActive = false;
var isMobNumberValid = false;
var isAcceptAndContinuePressed = false;
var mobNumberBoxBorderColor = '#000';
var isOTPCorrect = false;
var generatedOTP = "1234";
var finalOTP = "";
var counter = 30;
export default function OTPScreen() {
    const navigation = useNavigation();
    const [buttonStatus, setButtonStatus] = useState(true);
    const inputRef = React.useRef();
    const [incorrectOTPPopup, setIncorrectOTPPopup] = useState(false);
    const [showResendOTP, setShowResendOTP] = useState(false);

    const [count, setCount] = useState(counter);

    

    React.useEffect(() => {
        setTimeout(() => {
            inputRef.current?.focus()
        }, 0);
    }, []);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(function () {
            //console.log(count);
            if(count-1 > 0)
            {
                setCount(count - 1);
            }
            else
            {
                //Clearing the interval
                clearInterval(interval);
                setShowResendOTP(true);
                
            }
            
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    onResendOTPPress = function(){
        setShowResendOTP(false);
        setCount(counter);
    }

    setButtonContinue = function() {
        if(isButtonActive)
        {
            return {
                backgroundColor:'#FFF600',
                borderRadius:99,
                padding:20,
                width:deviceWidth/1.1,
                alignItems:'center',
                position:'absolute',
                flex:1,
                justifyContent:'flex-end',
                opacity:1
            }
        }
        else
        {
            
            return {
                backgroundColor:'#D3D3D3',
                borderRadius:99,
                padding:20,
                width:deviceWidth/1.1,
                alignItems:'center',
                position:'absolute',
                flex:1,
                justifyContent:'flex-end',
                opacity:0.4
            }
        }
    }
    setButtonContinueTxt = function() {
        if(isButtonActive)
        {
            return {
                fontSize:20, fontWeight:'bold', color:'#300A83'
            }
        }
        else
        {
            return {
                fontSize:20, fontWeight:'bold', color:'#000'
            }
        }
    }
    
    const onContinuePress = () => {
        console.log(finalOTP);
        checkOTP(finalOTP);
      }
      checkOTP = function(enteredOTP){
            finalOTP = enteredOTP;
            console.log(finalOTP,"___", enteredOTP);
            if(enteredOTP == generatedOTP)
            {
                isOTPCorrect = true;
            }
            else
            {
                isOTPCorrect = false;
            }

            isButtonActive = true;
            setButtonStatus(false);
            Keyboard.dismiss();
            // console.log("OTP: ",isOTPCorrect);
            if(isOTPCorrect)
            {
                //go to home page
                // <Stack>
                //     <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
                // </Stack>
                 navigation.navigate('HomeScreen');
            }
            else
            {
                // show incorrect otp popup
                setIncorrectOTPPopup(true);
                setTimeout(() => {
                    setIncorrectOTPPopup(false);
                }, 2000);
            }
      }

    const onEnterOTP = (enteredOTP) => {
        // console.log("______", enteredOTP, "______", generatedOTP);
        if(enteredOTP.length >= 4)
        {
            checkOTP(enteredOTP);
        }
        else
        {
            isButtonActive = false;
            setButtonStatus(true);
        }
        
        setButtonContinue();
        setButtonContinueTxt();
    };

    
    
    
  return (
    <DismissKeyboard>
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
        <View style={{flex:1, backgroundColor:'#fff', padding:16, justifyContent:'center', alignItems:'center'}}>
            {/* <StatusBar hidden/> */}
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={{fontSize:16, color:'#505050', marginTop:15, fontWeight:'500'}}>Enter OTP sent to 9869944819</Text>
             <View style={{ marginVertical:50, width: deviceWidth/1.6}}>
                <OtpInput
                    numberOfDigits={4}
                    onTextChange={(enteredOTP)=>onEnterOTP(enteredOTP)}
                    focusColor={'#4412A9'}
                    focusStickBlinkingDuration={400}
                    disabled={false}
                    width={300}
                    theme={{
                        pinCodeContainerStyle: {
                            backgroundColor: "#fff",
                            width: 50,
                            height: 50,
                            borderRadius:12
                        }
                    }}
                />
            </View>
            {showResendOTP ? (
                <View style={{marginTop:-30}}>
                    <TouchableOpacity style={styles.btnResendOTP} onPress={() => onResendOTPPress()}>
                        <Text style={{color:'#4611A9', fontSize:17, fontWeight:'600'}}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>   
            ) : null}

            {!showResendOTP ? (
                <View style={{flexDirection:'row', marginTop:-30}}>
                    <Text style={{color:'#505050', fontSize:15}}>Resend code in </Text>
                    <Text style={{color:'#000', fontWeight:'600', fontSize:15}}>{count}</Text>
                    <Text style={{color:'#000', fontWeight:'600', fontSize:15}}> sec</Text>
                </View>
            ) : null}
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.containerMain}>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={setButtonContinue()} disabled={buttonStatus} onPress={() => onContinuePress()}>
                            <Text style={setButtonContinueTxt()}>Continue</Text>
                        </TouchableOpacity>
                        {incorrectOTPPopup ? (
                            <View style={{backgroundColor:'#FF0000', width:deviceWidth/1.5, borderRadius:12, justifyContent:'center', height:'100%'}}>
                            <Text style={{  color:'#fff',  fontSize:20, textAlign:'center', fontWeight:'500'}}>Incorrect otp provided.</Text>
                        </View>
                        ) : null}
                    </View>
                </View>
            </SafeAreaView>
            
        </View>
    </SafeAreaView>
    </DismissKeyboard>
  )
}

 styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:30,
        marginTop: deviceHeight/10,
        fontWeight:'500'
    },
    btnResendOTP: {
        backgroundColor:'#fff',
        borderRadius:99,
        padding:10,
        width:deviceWidth/3,
        alignItems:'center',
        borderColor:'#4611A9',
        borderWidth:1
        
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        flexDirection:'row',
        flex:1
    },
        textStyle: {
        color: '#fff',
        fontSize: 18,
    },
    

})