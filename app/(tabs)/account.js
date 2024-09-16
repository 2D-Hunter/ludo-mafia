import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';

export default function Example() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{paddingBottom:60}}>
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Account</Text>
        </View> */}

        <ScrollView>
          <View style={styles.profile}>
            <Image
              alt=""
              source={{
                // uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              defaultSource={require('./../../assets/images/placeholder.png')}
              style={styles.profileAvatar} />

            <Text style={styles.profileName}>Ravi Ranjan Kumar</Text>

            <Text style={styles.profileEmail}>9869944819</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit Profile</Text>

                <FeatherIcon color="#fff" name="edit" size={16} />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            {/* <Text style={styles.sectionTitle}>Preferences</Text> */}

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                    {/* <FeatherIcon
                      color="#4711A7"
                      name="globe"
                      size={20} /> */}
                      <Ionicons name="globe-outline" size={27} color="#4711A7" />
                  </View>

                  <Text style={styles.rowLabel}>Language</Text>

                   <View style={styles.rowSpacer} />

                   <Text style={styles.rowValue}>English</Text>

                  { <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />}
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                      {/* <FeatherIcon
                        color="#fff"
                        name="music"
                        size={20} /> */}
                        <Ionicons name="wallet-sharp" size={27} color="#4711A7" />
                        
                    </View>

                    <Text style={styles.rowLabel}>Wallet Balance</Text>

                    {/* <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>Default</Text>

                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} /> */}
                  </TouchableOpacity>
                </View>

              

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                    {/* <FeatherIcon
                      color="#fff"
                      name="moon"
                      size={20} /> */}
                      <Ionicons name="document-text" size={27} color="#4711A7" />
                  </View>

                  <Text style={styles.rowLabel}>Your KYC</Text>

                  {/* <View style={styles.rowSpacer} />

                  <Switch
                    onValueChange={darkMode => setForm({ ...form, darkMode })}
                    value={form.darkMode} /> */}
                </View>
                
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                    {/* <FeatherIcon
                      color="#fff"
                      name="navigation"
                      size={20} /> */}
                      <MaterialIcons name="message" size={27} color="#4711A7" />
                  </View>

                  <Text style={styles.rowLabel}>Help & Support</Text>

                  {/* <View style={styles.rowSpacer} />

                  <Text style={styles.rowValue}>Los Angeles, CA</Text>

                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} /> */}
                </TouchableOpacity>
              </View>
            </View>

            {/* <View style={styles.section}> */}
              {/* <Text style={styles.sectionTitle}>Notifications</Text> */}

              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                      {/* <FeatherIcon
                        color="#fff"
                        name="at-sign"
                        size={20} /> */}
                        <MaterialCommunityIcons name="shield-check" size={27} color="#4711A7" />
                    </View>

                    <Text style={styles.rowLabel}>Responsible Gaming</Text>

                    {/* <View style={styles.rowSpacer} />

                    <Switch
                      onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                      }
                      value={form.emailNotifications} /> */}
                  </View>
                </View>

                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                      {/* <FeatherIcon
                        color="#fff"
                        name="bell"
                        size={20} /> */}
                        <Ionicons name="game-controller" size={30} color="#4711A7" />
                    </View>

                    <Text style={styles.rowLabel}>Game Management</Text>

                    {/* <View style={styles.rowSpacer} /> */}

                    {/* <Switch
                      onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                      }
                      value={form.pushNotifications} /> */}
                  </View>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                      {/* <FeatherIcon
                        color="#fff"
                        name="music"
                        size={20} /> */}
                        <Foundation name="info" size={32} color="#4711A7" />
                    </View>

                    <Text style={styles.rowLabel}>About</Text>

                    {/* <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>Default</Text>

                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} /> */}
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#E3E6F5' }]}>
                      {/* <FeatherIcon
                        color="#4711A7"
                        name="music"
                        size={20} /> */}
                        <Ionicons name="log-out" size={29} color="#4711A7" />
                    </View>

                    <Text style={styles.rowLabel}>Logout</Text>

                    {/* <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>Default</Text>

                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} /> */}
                  </TouchableOpacity>
                </View>

              </View>
            {/* </View> */}
          </View>
        </ScrollView>
      </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginTop: 6,
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4711A7',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Section */
  section: {
    paddingTop: 12,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    paddingLeft: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 16,
    height: 100,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    paddingLeft:24
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: '500',
    color: '#8B8B8B',
    marginRight: 4,
  },
});