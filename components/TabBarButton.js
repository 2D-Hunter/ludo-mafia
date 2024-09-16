import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function TabBarButton() {
  return (
    <Pressable
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
  </Pressable>
  )
}