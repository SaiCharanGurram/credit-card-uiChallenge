/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  Platform,
  useColorScheme,
  View,
} from 'react-native';
const {fontWeight, height} = Dimensions.get('window');
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <View style={{height: height, backgroundColor: 'black'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 30,
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                ...Platform.select({
                  ios: {fontFamily: 'Arial'},
                  android: {fontFamily: 'Roboto'},
                }),
                fontWeight: 'bold',
              }}>
              Hi Vamshi
            </Text>
            <Text style={{color: 'white', color: 'gray'}}>welcome Back</Text>
          </View>
          <View>
            <Image
              style={{width: 75, height: 75, borderRadius: 50}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwiNUolGE_ybMJdnOfdtkwG0knyyporBK6A&usqp=CAU',
              }}
            />
          </View>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#479162', '#07541C']}
          style={{
            backgroundColor: 'green',
            height: 200,
            borderRadius: 30,
            marginTop: 40,
            marginHorizontal: 30,
          }}>
          {/* <View
          style={{
            backgroundColor: 'green',
            height: 200,
            borderRadius: 30,
            marginTop: 40,
            marginHorizontal: 30,
          }}> */}
          <Image
            source={{
              uri:
                'https://icons.iconarchive.com/icons/icons8/ios7/256/Mobile-Sim-Card-Chip-icon.png',
            }}
            style={{
              width: 40,
              height: 40,
              marginLeft: 20,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 20,
              marginTop: 10,
            }}>
            4512 1122 4595 7852
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 50,
              marginHorizontal: 20,
            }}>
            <View>
              <Text style={{color: 'white'}}>CARD HOLDER</Text>
              <Text style={{color: 'white', fontWeight: '500'}}>Vamshi</Text>
            </View>
            <Image
              style={{width: 70, height: 40}}
              source={{
                uri:
                  'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png',
              }}
            />
          </View>
          {/* </View> */}
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            marginTop: 40,
          }}>
          <View>
            <Text style={{color: 'gray'}}>Balance</Text>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              $92,510
            </Text>
            <Text style={{color: 'gray'}}>Upcoming Payments</Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              width: 80,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontSize: 15}}>5.9%</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#403f3e', 'black']}
            style={{
              width: 150,
              height: 200,
              backgroundColor: 'red',
              borderRadius: 30,
              alignItems: 'center',
              margin: 40,
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                color: 'green',
                alignItems: 'center',
                marginTop: 20,
              }}
              source={require('./assets/suit.png')}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                Salary
              </Text>
              <Text style={{color: 'white', fontSize: 12, marginVertical: 5}}>
                Belong Interactive
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                +$2000
              </Text>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#403f3e', 'black']}
            style={{
              width: 150,
              height: 200,
              backgroundColor: 'red',
              borderRadius: 30,
              alignItems: 'center',
              margin: 40,
              marginLeft: -20,
            }}>
            {/* <Image
              style={{
                width: 50,
                height: 50,
                color: 'green',
                alignItems: 'center',
                marginTop: 20,
              }}
              source={{
                uri:
                  'https://img.favpng.com/0/24/0/paypal-icon-png-favpng-zsxzrKNVP2uwuFAq3wXHnyB5W.jpg',
              }}
            /> */}
            <SimpleLineIcons
              name="paypal"
              size={36}
              style={{marginTop: 32}}
              color="white"
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                Paypal
              </Text>
              <Text style={{color: 'white', fontSize: 12, marginVertical: 5}}>
                freelance payment
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginVertical: 5,
                  fontWeight: 'bold',
                }}>
                $45:00
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
