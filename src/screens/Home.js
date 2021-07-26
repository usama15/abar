import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScaledSheet from 'react-native-scaled-sheet';
import {Button} from 'react-native-paper';
function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assest/Front-screen.png')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.btn_group}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => console.log('Pressed')}
              theme={{colors: {primary: '#fcfcfc'}}}>
              JOIN
            </Button>
            <Button
              style={styles.btn1}
              mode="contained"
              onPress={() => console.log('Pressed')}
              theme={{colors: {primary: 'rgba(29,14,42,0.81)'}}}>
              SIGN IN
            </Button>
          </View>
          <TouchableOpacity>
            <Text style={styles.foo2}> Continue as guest ></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Why ABAR? ></Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  btn: {
    flex: 1,
    width: '40%',
    color: 'black',
    borderRadius: 0,
    marginTop: '150%',
    marginBottom: '10%',
    marginHorizontal: '5%',
  },
   btn1: {
    flex: 1,
    width: '40%',
    color: 'black',
    borderRadius: 0,
    marginTop: '150%',
    marginBottom: '10%',
    marginHorizontal: '5%',
  },
  btn_group:{
    flex: 1,
    flexDirection: 'row',

  },
  foo2: {
    flex: 1,
    // marginTop: '175%',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: '2%',
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: '5%',
  },
});

export default Home;
