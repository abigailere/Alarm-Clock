import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AlarmClock from './screens/Alarm';
import { styles, textStyles } from './styles';  // Adjust the path as needed


export default function App() {

  const [showWow, setShowWow] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={styles.container}> 
     <View style={styles.box}> 
        <Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
      </View>
      <Text style={{ ...textStyles.titleText, padding: 20, paddingTop: 10}}>Alarm Clock</Text>
      
      <AlarmClock style={{marginTop: 100, padding: 100, paddingTop: 100 }}/>
    
      <TouchableOpacity onPress={() => setShowWow(!showWow)} style={styles.button}>
        <Text style={textStyles.buttonText}>Reset</Text>
      </TouchableOpacity>
    

      {showWow && (
        <Text style={{ padding: 40 }}>Wow it actually works!</Text>
      )}


<AlarmClock style={{marginTop: 100, padding: 100, paddingTop: 100 }}/>


      <StatusBar style="auto" />
    </ScrollView>
  );
}