// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {View, StyleSheet, SafeAreaView, StatusBar, Platform} from "react-native";
import Swiper from "react-native-swiper";

import Slide from "./Slide";
import SystemWalkThrough from "./System";

import {Button, Theme} from "../components";
import type {ScreenProps} from "../components/Types";

export default class Walkthrough extends React.Component<ScreenProps<>> {

    componentWillMount() {
        StatusBar.setBarStyle("light-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#0059FF");
        }
    }

    home() {
        const {navigation} = this.props;
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("white");
        }
        navigation.navigate("Home");
    }

    @autobind
    renderPagination(index: number, total: number, context: Swiper): React.Node {
        const isFirst = index === 0;
        const isLast = index === total - 1;
        const back = () => context.scrollBy(-1);
        const next = () => isLast ? this.home() : context.scrollBy(1);
        return (
            <SafeAreaView style={styles.footer}>
                <Button label="Back" onPress={back} disabled={isFirst} />
                <Button style={styles.startButton} label={isLast ? "Start" : "Next"} onPress={next} primary={true}  />
            </SafeAreaView>
        );
    }

    @autobind
    onIndexChanged(index: number) {
        slides.filter((slide, i) => index !== i).forEach(slide => slide.hide());
        slides[index].show();
    }

    render(): React.Node {
        const {renderPagination, onIndexChanged} = this;
        return (
            <Swiper loop={false} {...{ renderPagination, onIndexChanged }}>
            {
                slides.map(slide => (
                    <View key={slide.title}>
                        <Slide {...slide} />
                    </View>
                ))
            }
            </Swiper>
        );
    }
}

/*
*/
//let systemWalkThrough: SystemWalkThrough;

const slides = [
    {
        title: "Create your first system",
        description: "Filters help you to quickly filter runners from a race meeting based on your selected variables. You can define up to 5 variables in a Filter.",
        icon: <SystemWalkThrough />,
        //show: () => systemWalkThrough.show(),
        //hide: () => systemWalkThrough.hide()
    }
];
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: Theme.spacing.base
    },
    startButton: {
        backgroundColor: '#8f2e28'
    }
});
