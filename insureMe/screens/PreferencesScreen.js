import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, Picker } from 'react-native';
import Table from 'react-native-simple-table';
import { ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function PreferencesScreen({navigation}) {
  const [insuranceBandChoice, setInsuranceBandChoice] = useState('Medium')
  const columns = [
    {
      title: 'Band',
      dataIndex: 'band',
      width: 105
    },
    {
      title: 'Coverage (US$)',
      dataIndex: 'coverage',
      width: 140
    }
  ];

  function generateTable() {
    return [
      {
        'band': 'Low',
        'coverage': '100-399',
      },
      {
        'band': 'Medium',
        'coverage': '400-699',
      },
      {
        'band': 'High',
        'coverage': '699-899',
      }
    ]
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.welcomeContainer}>

        <View style={styles.getStartedContainer}>
          <Text> 
            Hi there! In this page, we'd like to collect more information about your insurance budget and other related preferences.
          </Text>
          <Text>
            This is what the insurance coverage ranges are like for your selected location:
          </Text>

        </View>

        <View style={styles.getStartedContainer}>
          
          <Table height={200} columnWidth={60} columns={columns} dataSource={generateTable()} />

          <Text>Select your preference:</Text>

          <Picker
            selectedValue={insuranceBandChoice}
            style={{height: 40, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              setInsuranceBandChoice(itemValue)
            }
            prompt="Select your desired coverage">
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="High" value="high" />
          </Picker>

          <Button title="Activities ->" onPress={() => navigation.navigate('Activities')}/>

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
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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