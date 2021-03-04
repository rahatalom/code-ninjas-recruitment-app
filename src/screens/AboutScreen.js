import React, { Fragment } from "react";
import {Headline, Subheading, List, Divider, Paragraph, Button} from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";
import {WebView} from "expo";

const AboutScreen = function ({ navigation }) {
  // Notice the static content. Could you use the store to make your content more dynamic?

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Subheading style={styles.subheading}>
          Welcome to the second stage of the assessment process in Accenture's recruitment.
          We have been made aware you experience some visual impairments so we wanted to give
          you all the tools necessary to complete the assignment without any disadvantages.
        </Subheading>

        <Button
            color="#00303f"
            mode="contained"
            style={styles.button}
            onPress={() => {
              navigation.navigate('Sign In')
            }}>
          Start
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  // accessing 'data' from fetchDataReducer in store
  return {
    data: state.fetchDataReducer.data,
  };
};

export default connect(mapStateToProps)(AboutScreen);

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
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 15,
    textAlign: "center",
  },

  button: {
    width: 130,
    alignSelf: "center",
    marginVertical: 30,
  },
});
