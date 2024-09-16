import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

export function TabBar({ state, descriptors, navigation }) {


    const icon = {
        index: (props) => <Feather name='home' size={24} {...props} />,
        refer: (props) => <Feather name='repeat' size={24}  {...props} />,
        adda: (props) => <Feather name='home' size={24}  {...props} />,
        account: (props) => <Feather name='user' size={24}  {...props} />,
    }
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItems}
          >
            {icon [route.name] ({
                color: isFocused ? '#673ab7' : '#222'
            })}
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBar:{
        position: 'absolute',
         bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        // marginHorizontal: 30,
        // paddingVertical:15,
        // borderRadius:35,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 10},
        // shadowRadius: 10,
        // shadowOpacity: 0.1
    },
    tabBarItems:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        gap:0,
         paddingTop:25,
         paddingBottom:25
        
    }

})