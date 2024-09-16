import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '../../components/TabBar'

const TabLayout = () => {
  return(
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name='index' options={{title: "Home"}} />
      <Tabs.Screen name='refer' options={{title: "Refer"}} />
      <Tabs.Screen name='adda' options={{title: "Adda"}} />
      <Tabs.Screen name='account' options={{title: "Account"}} />
    </Tabs>
  )
}


export default TabLayout