import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
      paddingBottom: 500,
      marginTop: 100

    },
    button: {
      width: 300,
      height: 50,
      backgroundColor: 'lightgreen',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 700,
      //borderWidth: 2,
      marginBottom: 50,
      alignSelf: 'center'
    },
    box: {
      width: 100,
      height: 50,
      position: 'relative',
      top: 1,
      right: 10,
      backgroundColor: 'white',
      padding: 3,
      margin: 5,
      borderRadius: 700,
      //borderWidth: 2,
      //borderColor: "green",
      alignItems: 'center',
      //alignSelf: 'flex-end'
    },
    alarmTimeBox: {
        // width: 300,
        // height: 100,
        backgroundColor: 'white',
        padding: 10,
        // margin: 10,
        borderRadius: 700,
        borderWidth: 2,
        borderColor: "green",
        alignItems: "center"
      },
    time:
    {
      // padding: 80,
      fontWeight: "bold",
      fontSize: 15,
      color: "black"
  
  
    }
  
  });

const textStyles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  timeText: {
    alignSelf: 'flex-start', 
    fontSize: 30,  
    fontWeight: 'bold',}
});

export { styles, textStyles };
