import React, { useGlobal } from 'reactn';
import { Platform, StyleSheet, Text, View, Button, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({navigation}) {
  const [location, setLocation] = useGlobal('location');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

        <Text style={styles.getStartedText}>Hi there!{'\n'} Please select your desired travel location:</Text>

        <Picker
            selectedValue={location}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setLocation(itemValue)
            }
            prompt="Select your desired coverage">
            <Picker.Item label="London" value="London" />
            <Picker.Item label="New York" value="New York" />
            <Picker.Item label="Paris" value="Paris" />
            <Picker.Item label="San Francisco" value="San Francisco" />
            <Picker.Item label="Dallas" value="Dallas" />
            <Picker.Item label="Berlin" value="Berlin" />
            <Picker.Item label="Barcelona" value="Barcelona" />
        </Picker>


        <Button title="Submit" onPress={() => navigation.navigate('Preferences')}/>

        </View>

      </ScrollView>
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
