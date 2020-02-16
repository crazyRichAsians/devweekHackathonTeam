import React, { useGlobal, useEffect, setGlobal, useRef } from 'reactn';
import { SafeAreaView, Platform, StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { Card } from '../components/Activities/Card'
import Swiper from 'react-native-deck-swiper';
import { Pics } from '../components/Activities/ActivityPictures';


const API_TOKEN = 'wUXAB9kcSADMKU8Doj5VskGMwJsl'

const locationToCoordinates = {
    'London': [41.397158, 2.160873],
    'New York': [40.7128, 74.0060],
    'Paris': [48.8566, 2.3522],
    'San Francisco': [37.7749, 122.4194],
    'Dallas': [32.7767, 96.7970],
    'Berlin': [52.5200, 13.4050],
    'Barcelona': [41.3851, 2.1734]
}

export default function ActivitiesScreen({navigation}) {
    const [location, setLocation] = useGlobal('location');
    const [pointsOfInterest, setPointsOfInterest] = useGlobal('pointsOfInterest');

    const [latitude, longitude] = locationToCoordinates[location]

    console.log(pointsOfInterest)

    useEffect((latitude, longitude) => {
        fetch(
            `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${latitude}&longitude=${longitude}&radius=2
            `,
            {
              method: "GET",
              headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer " + API_TOKEN
              })
            }
          )
            .then(res => res.json())
            .then(response =>
              setPointsOfInterest(response.items)
            )
            .catch(error => console.log("NOOO" + error));
    }, [])

  return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <Swiper
                cards={Pics}
                renderCard={Card}
                infinite // keep looping cards infinitely
                backgroundColor="white"
                cardHorizontalMargin={0}
                stackSize={2} // number of cards shown in background
            />
        </SafeAreaView>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });