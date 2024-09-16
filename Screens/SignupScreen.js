import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
export default function SignupScreen({}) {
    
     const navigation = useNavigation();
    const [count, setCount] = useState(1);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [buttonStatus, setButtonStatus] = useState(true);

    const [invalidTxtVisible, setInvalidTxtVisible] = useState(false);
    const inputRef = React.useRef();

    React.useEffect(() => {
        setTimeout(() => {
            inputRef.current?.focus()
        }, 0);
    }, [])

    


    const disableButton = () => {
        setButtonDisabled(true);
        alert("Button has been disabled!");
    };

    const enableButton = () => {
        setButtonDisabled(false);
        alert("Button has been enabled!");
    };
    
    setButtonAccept = function() {
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
    setButtonAcceptTxt = function() {
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
    const onAcceptPress = () => {
        isMobNumberValid = true;
        if(isMobNumberValid)
        {
            navigation.navigate('OTPScreen');
        }
        else
        {
            setInvalidTxtVisible(!isMobNumberValid);
            mobNumberBoxBorderColor = '#FF0000'
            setMobNumberBox(mobNumberBoxBorderColor);
        }
        
      }

    const handleChange = (enteredText) => {
        if(enteredText.nativeEvent.text.length >= 10)
        {
            isButtonActive = true;
            setButtonStatus(false);
            Keyboard.dismiss();
            
            
        }
        else
        {
            setButtonStatus(true);
            isButtonActive = false;
            setInvalidTxtVisible(false);
            mobNumberBoxBorderColor = '#000'
            setMobNumberBox(mobNumberBoxBorderColor);
        }
        setButtonAccept();
        setButtonAcceptTxt();
    };

    setMobNumberBox = function(mobNumberBoxBorderColor)
    {
        return{
            flexDirection:'row',
            justifyContent:'center', 
            alignItems:'center', 
            backgroundColor:'#F3F4F6', 
            width:deviceWidth/1.2, 
            height:80, 
            borderTopLeftRadius:10, 
            borderTopRightRadius:10, 
            marginTop:30,
            gap:15,
            borderBottomWidth:0.8,
            borderColor:mobNumberBoxBorderColor
        }
    }
    
    
  return (
    <DismissKeyboard>
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={{flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#EBE7F8', 
        width:deviceWidth/1.2, 
        height:45, 
        borderRadius:99, 
        marginTop:20,
        gap:15}}>
        <Feather name='gift' size={25} color={'#222'}/>
        <Text style={{fontSize:22, color:'#000', fontWeight:'600'}}>Signup to get ₹10 bonus</Text>
    </View>
    <View style={setMobNumberBox(mobNumberBoxBorderColor)}>
        <Text style={{fontSize:22, color:'#808080'}}>+91</Text>
        <TextInput 
            ref={inputRef}
            style={{flex:1,
                flexDirection:'row',
                borderColor:'#000',
               // borderBottomWidth:0.4,
                height:58,
                alignItems:'center',
                fontSize:22}} 
            placeholder='Enter your phone number' 
            placeholderTextColor='#808080'
            selectionColor={Colors.black}
            keyboardType='numeric'
            maxLength={10}
            onChange={handleChange}
        />
        {invalidTxtVisible ? (
          <Feather name='alert-triangle' size={20} color={'#ff0000'} padding={15}></Feather>
        ) : null}
        
    </View>
    {invalidTxtVisible ? (
          <View style={{width:deviceWidth/1.3, marginTop:5}}>
          <Text style={{color:'#ff0000', opacity:1}}>
              Invalid mobile number
          </Text>
          </View>
        ) : null}
    
    <View style={{flexDirection:'row', gap:10, marginTop:25}}>
        <Text style={{fontSize:20, color:'#000'}}>Existing user?</Text>
        <Text style={{fontSize:20, color:'#300A83', fontWeight:'bold'}}>SIGN IN HERE</Text>
    </View>
    <View>
        <Text style={{fontSize:11.4, padding:25, color:'#808080', textAlign:'justify'}}>
            By continuing, I hereby confirm that I am 18 years of age or above and I
            am not playing from Assam, Telangana, Nagaland, Andhra Pradesh,
            Meghalaya, Sikkim, Arunachal Pradesh and outside India and I agree to
            the <Text style={{fontSize:15, textDecorationLine:'underline', fontWeight:'bold'}}>Terms and Conditions</Text> and <Text style={{fontSize:15, textDecorationLine:'underline', fontWeight:'bold'}}>Privacy Policy.</Text>
        </Text>
    </View>
    {/* <View style={styles.btnAccept}>
        <TouchableOpacity>
            <Text style={{fontSize:20, fontWeight:'bold'}}> Accept & Continue</Text>
        </TouchableOpacity>
    </View> */}
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerMain}>
        <View style={styles.bottomView}>
        <TouchableOpacity style={setButtonAccept()} disabled={buttonStatus} onPress={() => onAcceptPress()}>
            <Text style={setButtonAcceptTxt()}> Accept & Continue</Text>
        </TouchableOpacity>
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
        alignItems:'center',
    },
    title: {
        fontSize:35,
        marginTop: deviceHeight/6,
        fontWeight:'500'
    },
    bonus: {
        
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#EBE7F8', 
        width:deviceWidth/1.2, 
        height:45, 
        borderRadius:99, 
        marginTop:20,
        gap:15
    },
    mobNumber: {
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#F3F4F6', 
        width:deviceWidth/1.2, 
        height:80, 
        borderTopLeftRadius:10, 
        borderTopRightRadius:10, 
        marginTop:30,
        gap:15,
        borderBottomWidth:0.8,
        borderColor:'#000'
    },
    inputTxt: {
        flex:1,
        flexDirection:'row',
        borderColor:'#000',
       // borderBottomWidth:0.4,
        height:58,
        alignItems:'center',
        fontSize:22,
        
    },
    btnAccept: {
        backgroundColor:'#D3D3D3',
        borderRadius:99,
        padding:20,
        width:deviceWidth/1.1,
        alignItems:'center',
        position:'absolute',
        flex:1,
        justifyContent:'flex-end',
        opacity:0.4
        
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
    },
        textStyle: {
        color: '#fff',
        fontSize: 18,
    },
    

})