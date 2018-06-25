import * as React from 'react'
import autobind from "autobind-decorator";
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import {Constants} from "expo";
import { Theme } from './Theme'
import Type, {NavigationProps} from './Types'
import Firebase from './Firebase'
import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'

const dropdownOptions = [{
	value:'Account'
},{value:'Settings'}, 
{value: 'logout'}]
const createIcon = () => {
	return <Icon
					name='account-circle' 
					color='red'
					size={25}
					onPress={(e) => console.log('icon press')}/>
}
export default class Header extends React.Component<NavigationProps<*>> {
	componentWillMount() {
		console.log('logotitle mounting should have NavigationProps',this.props.navigation)
	}
	@autobind
	handlePress(e) {
		console.log(e)
		if(e === 'logout') {
			console.log('firebase', Firebase)
			Firebase.auth.signOut()
		}
	}
	render() {
		return (
			<View style={styles.logoContainer}> 
				<Text style={styles.logoText}> {this.props.title} </Text>
				<Image 
					source={require('../assets/horse.png')}
					style={styles.logo}
				/> 
				<Dropdown 
					data={dropdownOptions} 
					renderBase={(props) => createIcon(props)}
					onChangeText={this.handlePress}
					containerStyle={{left:245, top:10, width:100}}
					dropdownPosition={-3.5}

					
				/>
			</View>
		)
	}
}

const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
	logoContainer: {
		height: 57,
    flexDirection: "row",
    width:width
	},
	logo: {
		width: 50,
		height:40,
		left:10

	},
	logoText: {
		position:"absolute",
		top:Theme.spacing.small,
		left: width/2.3
	},
	iconContainer: {
		borderRadius: 20,
		width:75,
		left:width-200
	},
	dropdown: {
		marginLeft:500
	}
})