// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {StyleSheet, Dimensions, Linking, TouchableOpacity} from "react-native";

import {Text, Button, Container, Logo, Theme, AnimatedView} from "../components";
import type {ScreenProps} from "../components/Types";

export default class Welcome extends React.Component<ScreenProps<>> {
    componentWillMount() {
        console.log('Welcome component mounting')
    }
    @autobind
    signUp() {
        this.props.navigation.navigate("SignUp");
    }

    @autobind
    login() {
        this.props.navigation.navigate("Login");
    }

    @autobind
    framer() {
        console.log('framing called')
        Linking.openURL("https://framer.com/fiber");
    }

    render(): React.Node {
        return (
            <Container gutter={2} style={styles.root}>
                <Logo />
                <AnimatedView style={styles.container}>
                    <Text type="header1" style={styles.header}>RacePal</Text>
                </AnimatedView>
                <AnimatedView style={styles.container}>
                    <Text type="header3" style={styles.subHeader}>Your Market Edge</Text>
                </AnimatedView>
                <AnimatedView style={styles.container} delay={600} duration={300}>
                    <Button label="Login" style={styles.loginButton} full={true} primary={true} onPress={this.login} />
                    <Button label="Sign Up" full={true} onPress={this.signUp} />
                </AnimatedView>
                <TouchableOpacity style={styles.framer} onPress={this.framer}>
                </TouchableOpacity>
            </Container>
        );
    }
}

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
    root: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    container: {
        alignSelf: "stretch"
    },
    header: {
        textAlign: "center",
        marginTop: Theme.spacing.base * 2,
        marginBottom: Theme.spacing.base * 2
    },
    subHeader: {
        textAlign:"center",
        marginTop: Theme.spacing.base,
        marginBottom: Theme.spacing.base * 2,
        color: '#8f2e28'

    },
   loginButton: {
    backgroundColor: '#8f2e28'
   }
});
