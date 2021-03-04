import React, { Fragment } from "react";
import {Headline, Subheading, List, Divider, ProgressBar, red800, TextInput, Button} from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";

const ConfirmDetailsScreen = function ({ navigation }) {
  // Notice the static content. Could you use the store to make your content more dynamic?
  //do API call to be extra
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline style={styles.heading}>Profile</Headline>
        <ProgressBar progress={0.33} color="green"/>
        <TextInput
            label="First Name"
            mode="outlined"
            value="Joe"
            style={styles.textInput}
            // disabled={true}
        />
        <TextInput
            label="Last Name"
            mode="outlined"
            value="Smith"
            autoCompleteType="username"
            style={styles.textInput}
            // disabled={true}
        />
        <TextInput
            label="Date of Birth"
            mode="outlined"
            value="04/03/2021"
            style={styles.textInput}
            // disabled={true}
        />
        <TextInput
            label="Job Position"
            mode="outlined"
            value="Software Developer"
            style={styles.textInput}
            // disabled={true}
        />
        <Button
            color="#00303f"
            mode="contained"
            style={styles.button}
            onPress={() => {
              navigation.navigate('Assessment Adjustments');
            }}>
          Confirm
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

export default connect(mapStateToProps)(ConfirmDetailsScreen);

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
    paddingHorizontal: 15,
    textAlign: "center",
  },

  textInput: {
    paddingHorizontal: 10,
    paddingTop: 20,
    fontSize : 20,
  },

  text: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  button: {
    width: 130,
    alignSelf: "center",
    marginVertical: 30,
    marginTop: 35,
  },
});
