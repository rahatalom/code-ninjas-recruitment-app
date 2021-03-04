import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Subheading, Headline, Button } from "react-native-paper";
import { signIn } from "../redux/actions";
import { connect } from "react-redux";

const SignInScreen = function ({signIn, signInAttempted, navigation}) {
    //Notice how only email inputs are captured and sent to the store. How would you improve this functionality for your app?
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            {/*<Headline style={styles.title}> Sign into your account</Headline>*/}
            <Subheading style={styles.text}>Enter your username</Subheading>
            <TextInput
                mode="outlined"
                placeholder="Enter your username here"
                clearButtonMode="unless-editing"
                autoCompleteType="username"
                style={styles.textInput}
                onChangeText={(text) => setUsername(text)}
            />
          <Subheading style={styles.text}>Enter your password</Subheading>
          <TextInput
            mode="outlined"
            placeholder="Enter your password here"
            style={styles.textInput}
            secureTextEntry={true}
            clearButtonMode="unless-editing"
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            color="#00303f"
            mode="contained"
            style={styles.button}
            onPress={() => {
                signIn(username, password);
                //add the signInAttempted stuff
                console.log(signInAttempted);
                if(signInAttempted){
                    navigation.navigate('Confirm Details');
                }
            }}
          >
            Sign In
          </Button>
        </SafeAreaView>
    );
};
const mapStateToProps = (state) => {
    return {
        signInAttempted: state.signInReducer.signInAttempted,
    };
};
export default connect(mapStateToProps,{ signIn })(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#cae4db",
  },
  
  title: {
    marginTop: 30,
    marginBottom: 5,
  },
  
  textInput: {
    paddingHorizontal: 10,
  },
  
  button: {
    width: 130,
    alignSelf: "center",
    marginVertical: 30,
  },
  
  text: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
