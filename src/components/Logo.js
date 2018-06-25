// @flow
import * as React from "react";
import {StyleSheet, Dimensions, View, Image} from "react-native";

import {AnimatedView, simpleInterpolation, directInterpolation} from "../components/Animations";

type LogoProps = {};

// export default class Logo extends React.Component<LogoProps> {

//     render(): React.Node {
//         const animations = {
//             opacity: directInterpolation(),
//             transform: [{ translateY: simpleInterpolation(-200, 0) }]
//         };
//         return (
//             <View style={styles.container}>
//                 <AnimatedView duration={400} style={[styles.square, styles.a]} {...{ animations }}  />
//                 <AnimatedView delay={200} duration={500} style={[styles.square, styles.b]} {...{ animations }} />
//                 <AnimatedView duration={600} delay={400} style={[styles.square, styles.c]} {...{ animations }} />
//             </View>
//         );
//     }
// }
export default class Logo extends React.Component<LogoProps> {

    render(): React.Node {
        const animations = {
            opacity: directInterpolation(),
            transform: [{ translateY: simpleInterpolation(0, 0) }]
        };
        return (
            <View style={styles.container}>
                <AnimatedView duration={400} style={styles.horse} {...{ animations }}> 
                    <Image style={styles.logo} source={require('../assets/horse.png')} />
                </AnimatedView>
            </View>
        );
    }
}

const n = 75;
const d = n * Math.sqrt(2);
const translation = (d-n) * 0.5 + n * 0.5;
console.log(Dimensions.get('window'))
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: d * 2,
        height: d * 2
    },
    square: {
        borderColor: "white",
        borderWidth: 5,
        position: "absolute",
        width: n,
        height: n
    },
    logo: {
        marginBottom:100,
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height / 2

    },
    
});
