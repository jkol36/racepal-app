// @flow
import * as React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, SafeAreaView, View} from "react-native";
//import { Icon } from 'react-native-elements'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import {Theme} from "../components";

import type {NavigationProps} from "../components/Types";

type Tab = { label: string, icon: string };

export class HomeTab extends React.Component<NavigationProps<*>> {

    static tabs: Tab[] = [
        { label: "Tips Feed", routeName:'TipsFeed', icon: "star" },
    ];

    render(): React.Node {
        const {navigation} = this.props;
        const navState = navigation.state;
        const currentIndex = navState.index;
        return (
            <SafeAreaView style={styles.tabs}>
                <View style={styles.container}>
                {
                    HomeTab.tabs.map((info, i) => {
                        const color = i === currentIndex ? Theme.palette.primary : Theme.palette.lightGray;
                        return (
                            <TouchableWithoutFeedback
                                key={info.label}
                                onPress={() => i !== currentIndex ? this.props.navigation.navigate(info.routeName) : null}
                            >
                                <View style={styles.tab}>
                                    <Icon name={info.icon} type={info.type} size={25} {...{ color }} />
                                    <Text> {info.label} </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })
                }
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 8
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        height: 57
    },
    tab: {
        flexGrow: 1,
        height: 57,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        ...Theme.typography.micro
    }
});
