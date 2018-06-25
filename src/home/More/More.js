// @flow
import autobind from "autobind-decorator";
import * as React from "react";
import {View, StyleSheet, Dimensions, TouchableOpacity, Image, Animated} from "react-native";
import {Feather as Icon} from "@expo/vector-icons";
import {Constants} from "expo";

import {Text, Theme} from "../../components";
import type {ScreenProps} from "../../components/Types";

export default class More extends React.Component {

    componentWillMount() {
        console.log('More mounting')
    }

    @autobind
    loadMore() {
        this.props.userFeedStore.loadFeed();
    }

    render(): React.Node {
        const {navigation} = this.props;
        return (
            <View> 
                <Text style={{marginTop:200}}> More Yooo </Text>
            </View> 
        );
    }
}


// const styles = StyleSheet.create({
//     header: {
//         marginBottom: avatarSize * 0.5 + Theme.spacing.small
//     },
//     cover: {
//         width,
//         height: width
//     },
//     avatar: {
//         position: "absolute",
//         right: Theme.spacing.small,
//         bottom: - avatarSize * 0.5
//     },
//     settings: {
//         position: "absolute",
//         top: statusBarHeight + Theme.spacing.small,
//         right: Theme.spacing.base,
//         backgroundColor: "transparent",
//         zIndex: 10000
//     },
//     title: {
//         position: "absolute",
//         left: Theme.spacing.small,
//         bottom: 50 + Theme.spacing.small
//     },
//     outline: {
//         color: "rgba(255, 255, 255, 0.8)"
//     },
//     name: {
//         color: "white"
//     }
// });
