import React from "react";
import {Headline, Subheading, ProgressBar, Text, Button} from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";
import {Image} from "react-native";

const PreviewScreen = function ({ shouldIncreaseTextSize, isColourBlind, isDyslexic}) {
  // Notice the static content. Could you use the store to make your content more dynamic?
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline style={styles.subheading}>This is what your assessment will look like...</Headline>
        <ProgressBar progress={1} color="green" />
        <Subheading style={styles.text}>Text Adjustment</Subheading>
        {shouldIncreaseTextSize?
          isDyslexic?
            <Text style={styles.biggerTextWithSpace}>
              At Accenture, our people care deeply about doing the right thing.
              Together,we have proven that we can succeed providing value to our clients
              and shareholders and opportunities for our people while being a powerful force
              for good. Our shared commitment to operating with the highest ethical standards
              and making a positive difference in everything we do is what makes Accenture special.
            </Text>:
            <Text style={styles.biggerTextWithoutSpace}>
              At Accenture, our people care deeply about doing the right thing.
              Together,we have proven that we can succeed providing value to our clients
              and shareholders and opportunities for our people while being a powerful force
              for good. Our shared commitment to operating with the highest ethical standards
              and making a positive difference in everything we do is what makes Accenture special.
            </Text>:
          isDyslexic?
              <Text style={styles.smallerTextWithSpace}>
                At Accenture, our people care deeply about doing the right thing.
                Together,we have proven that we can succeed—providing value to our clients
                and shareholders and opportunities for our people—while being a powerful force
                for good. Our shared commitment to operating with the highest ethical standards
                and making a positive difference in everything we do is what makes Accenture special.
              </Text>:
              <Text style={styles.smallerTextWithoutSpace}>
                At Accenture, our people care deeply about doing the right thing.
                Together,we have proven that we can succeed—providing value to our clients
                and shareholders and opportunities for our people—while being a powerful force
                for good. Our shared commitment to operating with the highest ethical standards
                and making a positive difference in everything we do is what makes Accenture special.
              </Text>
          }
        <Subheading style={styles.text}>Colour Adjustment</Subheading>
        {isColourBlind?
          <Image source={require('../assets/images/img2.png')}
                 style={styles.colorImage}
                 resizeContainer={true}/>:
          <Image source={require('../assets/images/MicrosoftTeams-image.png')}
                 style={styles.colorImage}
                 rresizeContainer={true}/>
        }
          <Button
            color="#00303f"
            mode="contained"
            style={styles.button}
            onPress={() => {
              // navigation.navigate('Assessment Adjustments')
            }}>
          Start Assessment
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  // accessing 'data' from fetchDataReducer in store
  return {
    shouldIncreaseTextSize: state.applyAdjustmentsReducer.shouldIncreaseTextSize,
    isColourBlind: state.applyAdjustmentsReducer.isColourBlind,
    isDyslexic: state.applyAdjustmentsReducer.isDyslexic,
  };
};

export default connect(mapStateToProps)(PreviewScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#cae4db",
  },

  heading: {
    marginTop: 30,
    marginBottom: 5,
    paddingHorizontal: 15,
  },

  subheading: {
    paddingBottom: 5,
    paddingHorizontal: 5,
    textAlign: "center",
  },

  inner:{
    borderWidth: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  
  biggerTextWithSpace:{
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#00303f',
    borderWidth: 3,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 3,
    fontFamily: "Comic Sans",
  },

  biggerTextWithoutSpace:{
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#00303f',
    borderWidth: 3,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  
  smallerTextWithSpace:{
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#00303f',
    borderWidth: 3,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    letterSpacing: 3,
    fontFamily: "Comic Sans",
  },
  
  smallerTextWithoutSpace:{
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#00303f',
    borderWidth: 3,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },

  button: {
    width: 200,
    alignSelf: "center",
    marginVertical: 30,
  },
  
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  
  colorImage: {
    paddingLeft: 10,
    paddingRight: 10,
    width: 320, 
    height: 190, 
    resizeMode:'contain',
    borderColor: '#00303f',
    borderWidth: 3,
    marginLeft: 20,
  },
});
