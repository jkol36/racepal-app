// @flow
import * as React from "react";
import {StyleSheet, View, Platform} from "react-native";

import {Text, Avatar, Theme} from "../../components";
import type {Comment, Profile} from "../../components/Model";

type CommentProps = {
    comment: Comment,
    profile: Profile
};

export default class CommentComp extends React.Component<CommentProps> {

    componentWillMount() {
        console.log('comment component mounting')
    }

    render(): React.Node {
        const {text} = this.props.comment;
        const {picture, name} = this.props.profile;
        return (
            <View style={styles.container}>
                <Avatar {...picture} />
                <View style={styles.comment}>
                    <Text style={styles.author}>{name}</Text>
                    <Text>{text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: Theme.spacing.small,
        margin: Theme.spacing.small,
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.14,
        shadowRadius: 6,
        borderColor: Theme.palette.borderColor,
        borderWidth: Platform.OS === "ios" ? 0 : 1
    },
    author: {
        color: "black",
        fontFamily: Theme.typography.semibold
    },
    comment: {
        flex: 1,
        paddingHorizontal: Theme.spacing.small
    }
});
