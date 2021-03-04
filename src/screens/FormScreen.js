import React, { Fragment,useState } from "react";
import {Headline, Subheading, List, Divider, ProgressBar, red800, Switch, Button} from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";
import {applyAdjustments} from "../redux/actions";

const FormScreen = function ({ navigation, applyAdjustments }) {
    const [colourToggle,setColourToggle] = useState(false);
    const [dyslexiaToggle,setDyslexiaToggle] = useState(false);
    const [fontToggle,setFontToggle] = useState(false);

    const Toggle = () => {
        setColourToggle(!colourToggle);
    }
    const Toggle2 = () => {
        console.log(colourToggle);
        setDyslexiaToggle(!dyslexiaToggle);
    }
    const Toggle3 = () => {
         console.log(dyslexiaToggle);
        setFontToggle(!fontToggle);
    }

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>


                <Headline style={styles.heading}>
                    Form
                </Headline>
                <ProgressBar progress={0.66} color="green" />
                <Subheading style={styles.text}>Colour blindness</Subheading>
                <Switch value={colourToggle} onValueChange={Toggle} style={styles.switchStyle}/>
                <Subheading style={styles.text}>Dyslexia </Subheading>
                <Switch value={dyslexiaToggle} onValueChange={Toggle2} style={styles.switchStyle}/>
                <Subheading style={styles.text}>Adjust font size</Subheading>
                <Switch value={fontToggle} onValueChange={Toggle3} style={styles.switchStyle}/>

                <Button
                    color="#00303f"
                    style={styles.button}
                    mode="contained"
                    onPress={()=>{
                        applyAdjustments(colourToggle, dyslexiaToggle, fontToggle);
                        navigation.navigate('Preview');
                    }}
                >
                    Apply
                </Button>


            </ScrollView>

        </SafeAreaView>
    );
}

export default connect(null, {applyAdjustments})(FormScreen);

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

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    paragraph:
        {marginLeft:"5%",
            marginRight:"5%",
            textAlign:"center",
            paddingTop:"4%",},
    button:
        {width:"50%",
            marginLeft:"24%",
            marginTop:"10%",},

    subheading: {
        paddingBottom: 5,
        paddingHorizontal: 15,
    },

    switchStyle: {
        marginTop: 5,
        marginLeft: 15,
    },

    text: {
        marginLeft: 20,
        marginTop: 20,
    },

});
